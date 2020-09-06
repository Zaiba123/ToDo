import React from 'react';
import {addTodo, addDescription} from "../action/addTodo.action"
import { connect } from "react-redux";

 class InputField extends React.Component {
    handleChange = (e) => this.props.addDescription(e.target.value);
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.props.description);
    };
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter a task.." value={this.props.description} name="todo" onChange={this.handleChange}/>
                </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    addTodo : todo => dispatch(addTodo(todo)),
    addDescription: value => dispatch(addDescription(value))
});
const mapStateToProps = state => ({
    description: state.description
});
export default connect(
    mapStateToProps, //mapStateToProps should come before Dispatch
    mapDispatchToProps)(InputField);