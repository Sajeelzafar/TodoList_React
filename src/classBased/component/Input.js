import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        if (title.trim()) {
          this.props.addinput(title);
          this.setState({
            title: '',
          });
        } else {
          alert('Input field is empty');
          this.setState({
            title: '',
          });
        }
      };

      render() {
        const { title } = this.state;
        return (
          <form onSubmit={this.handleSubmit} className="form-container">
            <input
              type="text"
              className="input-text"
              placeholder="Add todo..."
              value={title}
              name="title"
              onChange={this.onChange}
            />
            <button type="button">Submit</button>
          </form>
        );
      }
}
export default Input;
