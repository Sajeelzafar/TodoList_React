import React from 'react';
import Item from './item';

class List extends React.PureComponent {
  render() {
    // const { Todolist } = this.props;
    // console.log(Todolist);
    // console.log('this props is', this.props);
    return (

      <ul>
        {this.props.todoList.map((element) => (
          <Item key={element.id} todoItem={element} handleChangeProps={this.props.handleChangeProps}
          deleteTodoItem={this.props.deleteTodoItem}/>
        ))}
      </ul>
    );
  }
}

export default List;
