import React from 'react';
import {addTodo} from "../action/addTodo.action"
import { connect } from "react-redux";

 class InputField extends React.Component {
    state = {
       todo: ""
    };
  
    handleChange = (e) => this.setState({todo: e.target.value});
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
    }
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter your todo.." name="todo" onChange={this.handleChange}/>
                </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addTodo : todo => dispatch(addTodo(todo))
})
export default connect(
    null,
    mapDispatchToProps)(InputField);