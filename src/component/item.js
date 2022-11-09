import React from 'react';
import styles from './TodoItem.module.css';

class Item extends React.PureComponent {
    state = {
      editing: false,
    }

    handleEditing = () => {
      this.setState({
        editing: true,
      });
    }

    handleUpdatedDone = event => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
          }
      }

    render() {
      const viewMode = {};
      const editMode = {};

      if (this.state.editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
      const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
      const { completed, id, title } = this.props.todoItem;
      return (
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={completed}
              onChange={() => this.props.handleChangeProps(id)}
              style={viewMode}
            />
            <button type="button" onClick={() => this.props.deleteTodoItem(id)}>Delete</button>
            <span style={completed ? completedStyle : null}>
              {title}
            </span>
          </div>
          <input
            type="text"
            style={editMode}
            className={styles.textInput}
            value={title}
            onChange={(e) => {
              this.props.setUpdate(e.target.value, id);
            }}
            onKeyDown={this.handleUpdatedDone}
          />
        </li>
      );
    }
}

export default Item;
