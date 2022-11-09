/* eslint-disable */
import React from 'react';
import Item from './item';

const List = (props) => (
  <ul>
    {props.todoList.map((element) => (
      <Item
        key={element.id}
        todoItem={element}
        handleChangeProps={props.handleChangeProps}
        deleteTodoItem={props.deleteTodoItem}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);

export default List;
