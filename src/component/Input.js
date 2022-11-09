import React, { Component } from "react"

class Input extends Component {
    state = {
        title: ""
      };
      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.addinput(this.state.title);
            this.setState({
                title: "",
            })
        } else {
            alert("Input field is empty");
            this.setState({
                title: "",
            })
        }
      };
  render() {
    const {title} = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add todo..." value={title} name="title" onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}
export default Input;