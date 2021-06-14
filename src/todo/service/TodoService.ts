import { observable } from 'mobx';
import axios from 'axios';

export interface TodoData {
  regDt: number;
  title: string;
  scheduleNo: number; 
  useYn: string;  
  scheduleCd: string; 
  regUsrNo: string;
}

interface TodoService {
  todoData: TodoData[];
  currentId: number;
  fnList: () => void;
  addTodo: (content: string) => void;
  removeTodo: (id: number) => void;
  checkTodo: (id: number,useYn: string) => void;
}

export const todo = observable<TodoService>({
  todoData: [],
  currentId: 0,

  fnList(){
    const dt = { sendData: {}};
    axios.post('http://localhost:8080/rest/schedule/list',dt).then(res =>{
        this.todoData.splice(0);
        res.data.results.scheduleList.map(item => {
            this.todoData.push(item);
        }); 
    });
  },

  addTodo(title) {
    //this.todoData.push({ id: this.currentId, content, checked: false });
    this.currentId++; 
    const dt = { title: title}; 
    axios.post('http://localhost:8080/rest/schedule/regist',dt
    ).then(res =>{
        this.fnList();
    });
  }, 
  removeTodo(scheduleNo) {
    const dt = { scheduleNo: scheduleNo }; 
    axios.post('http://localhost:8080/rest/schedule/delete',dt
    ).then(res =>{
        this.fnList();
    });
  },
  checkTodo(scheduleNo, useYn) {

    const dt = { scheduleNo: scheduleNo, useYn: useYn };
    axios.post('http://localhost:8080/rest/schedule/check',dt
    ).then(res =>{ 
        this.fnList();
    });
  },
});