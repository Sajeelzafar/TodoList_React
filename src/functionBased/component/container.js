import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './list';
import Header from './Header';
import Input from './Input';

function getInitialTodos() {
  // getting stored items
  const temp = localStorage.getItem('todoList');
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
}

const Container = () => {
  const [todoList, settodoList] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todoList);
    localStorage.setItem('todoList', temp);
  }, [todoList]);

  const addinput = (title) => {
    const newtodoList = {
      id: uuidv4(),
      title,
      completed: false,
    };
    settodoList([...todoList, newtodoList]);
  };

  const setUpdate = (updatedTitle, id) => {
    settodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  const handleChange = (id) => {
    settodoList((prevState) => 
      prevState.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };

  const itemToDel = (id) => {
    settodoList([
      ...todoList.filter((todo) => todo.id !== id),
    ]);
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <Input addinput={addinput} />
        <List
          todoList={todoList}
          handleChangeProps={handleChange}
          deleteTodoItem={itemToDel}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default Container;
