import ChatForm from "../component/ChatForm";
import ChatList from "../component/ChatList";
import Footer from "../../common/component/Footer";
import Header from "../../common/component/Header"; 
import React, {Component} from 'react'; 
import { chat } from '../service/ChatService';

class ChatPage extends Component{

  componentDidMount() {  
    chat.fnStartChat(); 
  }

  render()
  {
    return(
    <div className="ChatPage">
        <Header/>
        <ChatForm/>
        <ChatList />
        <Footer highlight="chat"/>
    </div>
    )
  }

}

export default ChatPage;