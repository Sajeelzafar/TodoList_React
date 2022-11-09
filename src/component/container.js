import React from 'react';
import List from './list';
import Header from "./Header";
import Input from "./Input";
import { v4 as uuidv4 } from "uuid";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: uuidv4(),
          title: 'First task',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Second task',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Third task',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Fourth task',
          completed: false,
        },
      ],
    };
  }

  addinput = (title) => {
    const newtodoList = {
        id: uuidv4(),
        title: title,
        completed: false
      };
      this.setState({
        todoList: [...this.state.todoList, newtodoList]
      });
  }

  handleChange = (id) => {
    this.setState(prevState => ({
        todoList: prevState.todoList.map(element => {
            if (element.id === id){
                return {
                    ...element,
                    completed: !element.completed,
                  }
            }
            return element;
        })
        
    })) 
  };

  itemToDel =(id) => {
    this.setState({
        todoList: [
          ...this.state.todoList.filter(todo => {
            return todo.id !== id;
          })
        ]
      });
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="container">
        <div className="inner">
            <Header />
            <Input addinput = {this.addinput}/>
            <List todoList={todoList} handleChangeProps={this.handleChange} deleteTodoItem={this.itemToDel}/>
        </div>
      </div>
    // <ul>
    //     {this.state.todoList.map(element => (
    //         <li>{element.title}</li>
    //     ))}
    // </ul>
    );
  }
}

export default Container;
