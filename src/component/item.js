import React from 'react';

class Item extends React.PureComponent {
    
  render() {
    // const { todoItem: { title } } = this.props;
    return (
        <li>
            <input type="checkbox" checked={this.props.todoItem.completed}
            onChange={() => this.props.handleChangeProps(this.props.todoItem.id)} />
            <button onClick={() => this.props.deleteTodoItem(this.props.todoItem.id)}>Delete</button>
            {this.props.todoItem.title}
        </li>
    );
  }
}

export default Item;
