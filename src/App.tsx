
import './App.css';
import React, {Component} from 'react'; 
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import TodoPage from "./todo/page/TodoPage";
import ChatPage from "./chat/page/ChatPage";
import LoginPage from "./login/page/LoginPage";

import PrivateRoute from "./PrivateRoute";


class App extends Component{

  render()
  {
    return(
      <div>
        <Router>
            <Redirect to="/login" />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/chat" component={ChatPage} />
            <PrivateRoute path="/todo" component={TodoPage} />
        </Router>
      </div>  
    ) 
  }

}

export default App;