import React from 'react';
import {addTodo, addDescription, editItem} from "../action/addTodo.action"
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { connect } from "react-redux";

 class InputField extends React.Component {
    handleChange = (e) => this.props.addDescription(e.target.value);
    handleSubmit = e => {
        e.preventDefault();
        if(this.props.currentItem || this.props.currentItem===0)
        {
            this.props.editItem({value:this.props.description,currentItem:this.props.currentItem})
        }
        else
        {
            this.props.addTodo(this.props.description);
        }
    };
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    {/* <TextField id="outlined-basic" label="Standard" onChange={this.handleChange}> {this.props.description}</TextField> */}
                    <input type="text" placeholder="Enter a task.." value={this.props.description} name="todo" onChange={this.handleChange}/>
                    <Button type="submit" variant="outlined" value={this.props.description} name="todo" onChange={this.handleChange}> Submit </Button>
                </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    addTodo : todo => dispatch(addTodo(todo)),
    addDescription: value => dispatch(addDescription(value)),
    editItem: obj => dispatch(editItem(obj))
});
const mapStateToProps = state => ({
    description: state.description,
    currentItem:state.currentItem
});
export default connect(
    mapStateToProps, //mapStateToProps should come before Dispatch
    mapDispatchToProps)(InputField);