
import './App.css';
import React, {Component} from 'react'; 
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import TodoPage from "./todo/page/TodoPage";
import ChatPage from "./chat/page/ChatPage";

class App extends Component{

  render()
  {
    return(
      <div>
        <Router>
            <Redirect to="/chat" />
            <Route path="/chat" component={ChatPage} />  
            <Route path="/todo" component={TodoPage} /> 
        </Router>
      </div>
    ) 
  }

}

export default App;