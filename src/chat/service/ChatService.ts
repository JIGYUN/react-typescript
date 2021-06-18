import { observable } from 'mobx';
import axios from 'axios';

import socketIOClient from "socket.io-client";


const options = {'forceNew': true};
const socket = socketIOClient('localhost:4001');


export interface ChatData {
  sender: string; 
  data: string;
  no: number;
}

interface ChatService {
  chatData: ChatData[];
  currentId: number;
  socketNo: number;
  fnList: () => void;  
  fnStartChat: () => void;
  addChat: (content: string, nickname: string) => void;
  removeChat: (id: number) => void;
  checkChat: (id: number,useYn: string) => void; 
}

export const chat = observable<ChatService>({
  chatData: [],
  currentId: 0, 
  socketNo:0,

  fnList(){
    const dt = { sendData: {}};
    axios.post('http://localhost:8080/rest/schedule/list',dt).then(res =>{
        this.chatData.splice(0);
        res.data.results.scheduleList.map(item => {
            this.chatData.push(item);
        }); 
    });

    
    socket.on('receive message', (message: { sender: string, data: string, no: number }) => {
      console.log(message);
      this.currentId++;
      message.no = this.currentId;
      this.chatData.push(message);
    })


  },

  fnStartChat(){

    if (this.socketNo == 0) {
      socket.on('message', (message: { sender: string, data: string, no: number }) => {
        console.log(message);
        this.currentId++;
        message.no = this.currentId;
        this.chatData.push(message);
        window.scroll({
          top: document.body.offsetHeight,
          behavior: 'smooth',
        }); 
      });   

      socket.on('enterChat', (message: { sender: string, data: string, no: number }) => {
        message.data = message.sender  + "님이 입장하셨습니다."; 
        console.log(message);
        this.chatData.push(message); 
      });

      socket.emit('enterChat', { sender: "admin"});
    }

    this.socketNo++;
  },

  addChat(data, nickname) {
    //this.todoData.push({ id: this.currentId, content, checked: false });
     
    socket.emit('message', { sender: nickname, data: data });
  },
  removeChat(scheduleNo) {
    const dt = { scheduleNo: scheduleNo };
    axios.post('http://localhost:8080/rest/schedule/delete',dt
    ).then(res =>{
        this.fnList();
    });
  },
  checkChat(scheduleNo, useYn) {

    const dt = { scheduleNo: scheduleNo, useYn: useYn };
    axios.post('http://localhost:8080/rest/schedule/check',dt
    ).then(res =>{ 
        this.fnList();
    });
  },
});