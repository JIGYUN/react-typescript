import Footer from "../../common/component/Footer";
import Header from "../../common/component/Header"; 
import React, {Component} from 'react'; 


class TodoPage_2 extends Component{

  componentDidMount() {  
    //todo.fnList();
  }
  
  render()
  {
    return(
    <div className="TodoPage_2">
        <Header/>
        <Footer/>
    </div>
    )
  }

}

export default TodoPage_2;