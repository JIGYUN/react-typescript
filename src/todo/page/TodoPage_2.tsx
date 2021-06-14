import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import Footer from "../../common/component/Footer";
import Header from "../../common/component/Header"; 
import React, {Component} from 'react'; 
import { todo } from '../service/TodoService';

class TodoPage_2 extends Component{

  componentDidMount() {  
    //todo.fnList();
  }
  
  render()
  {
    return(
    <div className="TodoPage_2">
      <div style={{textAlign:"center",alignItems:"center",display: "flex",justifyContent:"center"}}>  
        <Header/>
      </div>
      <div style={{textAlign:"center",alignItems:"center",display: "flex",justifyContent:"center"}}>  
        <Footer/>
      </div>
    </div>
    )
  }

}

export default TodoPage_2;