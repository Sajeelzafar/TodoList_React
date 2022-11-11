import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';

const List = ({
  todoList, handleChangeProps, deleteTodoItem, setUpdate,
}) => (
  <ul>
    {todoList.map((element) => (
      <Item
        key={element.id}
        todoItem={element}
        handleChangeProps={handleChangeProps}
        deleteTodoItem={deleteTodoItem}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

List.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default List;
