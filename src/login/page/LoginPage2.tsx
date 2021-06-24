import LoginForm2 from "../component/LoginForm2";

import React, {Component} from 'react'; 
import { login } from '../service/LoginService';

class LoginPage2 extends Component{

  componentDidMount() {  
    
  }

  render()
  {
    return(
    <div className="LoginPage2">

        <LoginForm2/>

    </div>
    )
  } 

}

export default LoginPage2;