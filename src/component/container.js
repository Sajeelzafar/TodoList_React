import React from 'react';
import List from './list';
import Header from "./Header"

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 1,
          title: 'First task',
          completed: false,
        },
        {
          id: 2,
          title: 'Second task',
          completed: false,
        },
        {
          id: 3,
          title: 'Third task',
          completed: false,
        },
        {
          id: 4,
          title: 'Fourth task',
          completed: false,
        },
      ],
    };
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
    console.log("deleted", id);
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <Header />
        <List todoList={todoList} handleChangeProps={this.handleChange} deleteTodoItem={this.itemToDel}/>
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
