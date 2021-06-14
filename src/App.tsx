
import logo from './logo.svg';
import './App.css';
import Bottom from "./common/component/Footer";
import Header from "./common/component/Header";
import React, {Component} from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoPage from "./todo/page/TodoPage";
import TodoPage2 from "./todo/page/TodoPage_2";

class App extends Component{

  render()
  {
    return(
      <div>
        <Router>
            <Route path="/" component={TodoPage2} />
            <Route path="/todo" component={TodoPage} /> 
        </Router>
      </div>
    )
  }

} 

export default App;