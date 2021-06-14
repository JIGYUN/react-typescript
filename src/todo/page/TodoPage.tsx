import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";
import Footer from "../../common/component/Footer";
import Header from "../../common/component/Header"; 
import React, {Component} from 'react'; 
import { todo } from '../service/TodoService';

class TodoPage extends Component{

  componentDidMount() {  
    todo.fnList();
  }

  render()
  {
    return(
    <div className="TodoPage">
      <div style={{textAlign:"center",alignItems:"center",display: "flex",justifyContent:"center"}}>  
        <Header/>
      </div>
      <div style={{textAlign:"center",alignItems:"center",paddingTop:"60px"}}>       
        <TodoForm/> 
      </div>
      <div style={{textAlign:"center",alignItems:"center",display: "flex",justifyContent:"center"}}>  
        <TodoList />
      </div>
      <div style={{textAlign:"center",alignItems:"center",display: "flex",justifyContent:"center"}}>  
        <Footer/>
      </div>
    </div>
    )
  }

}

export default TodoPage;