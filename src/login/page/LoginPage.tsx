import LoginForm from "../component/LoginForm";
import React, {Component} from 'react'; 
import { login } from '../service/LoginService';

class LoginPage extends Component{

  componentDidMount() {  
    
  }

  render()
  {
    return(
    <div className="LoginPage">
        <LoginForm/>
    </div>
    )
  } 

}

export default LoginPage;