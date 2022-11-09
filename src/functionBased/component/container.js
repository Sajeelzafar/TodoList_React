import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './list';
import Header from './Header';
import Input from './Input';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todoList');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todoList: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.state.todoList) {
      const temp = JSON.stringify(this.state.todoList);
      localStorage.setItem('todoList', temp);
    }
  }

  addinput = (title) => {
    const newtodoList = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, newtodoList],
    }));
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todoList: this.state.todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    });
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      }),

    }));
  };

  itemToDel =(id) => {
    this.setState((prevState) => ({
      todoList: [
        ...prevState.todoList.filter((todo) => todo.id !== id),
      ],
    }));
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <Input addinput={this.addinput} />
          <List
            todoList={todoList}
            handleChangeProps={this.handleChange}
            deleteTodoItem={this.itemToDel}
            setUpdate={this.setUpdate}
          />
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
