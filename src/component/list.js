import React from 'react';
import Item from './item';

class List extends React.PureComponent {
  render() {
    const { todoList } = this.props;
    // console.log(Todolist);
    // console.log('this props is', this.props);
    return (

      <ul>
        {todoList.map((element) => (
          <Item
            key={element.id}
            todoItem={element}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoItem={this.props.deleteTodoItem}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default List;
