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
          completed: true,
        },
        {
          id: 2,
          title: 'Second task',
          completed: true,
        },
        {
          id: 3,
          title: 'Third task',
          completed: true,
        },
        {
          id: 4,
          title: 'Fourth task',
          completed: true,
        },
      ],
    };
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <Header />
        <List todoList={todoList} />
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
