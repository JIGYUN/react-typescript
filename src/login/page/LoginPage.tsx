import LoginForm from "../component/LoginForm";
import Footer from "../../common/component/Footer";
import Header from "../../common/component/Header"; 
import React, {Component} from 'react'; 
import { chat } from '../service/LoginService';

class ChatPage extends Component{

  componentDidMount() {  
    
  }

  render()
  {
    return(
    <div className="ChatPage">
        <Header/>
        <LoginForm/>
        <Footer highlight="chat"/>
    </div>
    )
  }

}

export default ChatPage;