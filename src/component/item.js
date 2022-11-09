import React from 'react';
import styles from "./TodoItem.module.css";

class Item extends React.PureComponent {
    
  render() {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }
    const { completed, id, title } = this.props.todoItem;
    return (
        <li className={styles.item}>
            <input className={styles.checkbox} type="checkbox" checked={completed}
            onChange={() => this.props.handleChangeProps(id)} />
            <button onClick={() => this.props.deleteTodoItem(id)}>Delete</button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
        </li>
    );
  }
}

export default Item;
