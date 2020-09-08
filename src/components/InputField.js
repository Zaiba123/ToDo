import React from 'react';
import {addTodo, addInputTitle, editInputBox} from "../action/addTodo.action"
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import "./style.css";

 class InputField extends React.Component {
    handleChange = (e) => this.props.addInputTitle(e.target.value);
    handleSubmit = e => {
    //     if (selected || selected === 0)
    //   editAddTodo({
    //     value: text,
    //     selected: selected
    //   });
    // else addTodo(text);
    
        e.preventDefault();
        if(this.props.currentItem)
        {
            this.props.editInputBox({value:this.props.inputTitle,currentItem:this.props.currentItem})
        }
        else if ( this.props.inputTitle.length!==0)
        {
            this.props.addTodo(this.props.inputTitle);
        }
    };
    render() {
        return (
                <form>
                    <input type="text" placeholder="Enter a task.." value={this.props.inputTitle} name="todo" onChange={this.handleChange}/>
                    <Button type="submit"  variant="outlined" value={this.props.inputTitle} name="todo" onClick={this.handleSubmit}> Add Item  <AddIcon/></Button>
                </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    addTodo : todo => dispatch(addTodo(todo)),
    addInputTitle: value => dispatch(addInputTitle(value)),
    editInputBox: obj => dispatch(editInputBox(obj))
});
const mapStateToProps = state => ({ //get value of text
    inputTitle: state.inputTitle,
    currentItem:state.currentItem
});
export default connect(
    mapStateToProps, //mapStateToProps should come before Dispatch
    mapDispatchToProps)(InputField);