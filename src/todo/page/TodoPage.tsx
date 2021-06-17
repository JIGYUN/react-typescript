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
        <Header/>
        <TodoForm/> 
        <TodoList />
        <Footer/>
    </div>
    )
  }

}

export default TodoPage;