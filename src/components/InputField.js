import React from 'react';
import { Button } from '@material-ui/core';
import {Todo} from './Todo.js';
import AddIcon from '@material-ui/icons/Add';
import "./style.css";

const InputField = () => {
    // const handleChange = (e) => addInputTitle(e.target.value);
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if(currentItem)
    //     {
    //         editInputBox({value:inputTitle,currentItem:currentItem})
    //     }
    //     else if ( inputTitle.length!==0)
    //     {
    //         addTodo(inputTitle);
    //     }
    // };
    return(
        <div>hi</div>
    )
}

//  export default class InputField extends React.Component {
//     handleChange = (e) => this.props.addInputTitle(e.target.value);
//     handleSubmit = e => {
//         e.preventDefault();
//         if(this.props.currentItem)
//         {
//             this.props.editInputBox({value:this.props.inputTitle,currentItem:this.props.currentItem})
//         }
//         else if ( this.props.inputTitle.length!==0)
//         {
//             this.props.addTodo(this.props.inputTitle);
//         }
//     };
//     render() {
//         return (
//                 <form>
//                     <input type="text" placeholder="Enter a task.." value={this.props.inputTitle} name="todo" onChange={this.handleChange}/>
//                     <Button type="submit"  variant="outlined" value={this.props.inputTitle} name="todo" onClick={this.handleSubmit}> Add Item  <AddIcon/></Button>
//                 </form>
//         )
//     }
// }
export default InputField;