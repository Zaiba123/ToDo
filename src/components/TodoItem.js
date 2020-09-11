import React from 'react';
import { Button } from '@material-ui/core';
import {Todo} from './TodoItemTitleCreator.js';
import AddIcon from '@material-ui/icons/Add';
import "./style.css";
import { useRecoilValue } from 'recoil';
import { todosState } from '../recoil/atoms.js';
import {atom } from  'recoil'
import List from './List'

function replaceItemAtIndex(arr,index,newValue){
    return [...arr.splice(0,index),newValue,...arr.slice(index+1)];
}
function removeItemAtIndex(arr,index,newValue){
    return [...arr.splice(0,index),...arr.slice(index+1)];
}

const TodoItem = (item) => {
    const [List, setList] = useRecoilValue(todosState);
    const index = List.findIndex((listItem) => listItem === item);

    const editItemText = ({target: {value}}) =>{
        const newList = replaceItemAtIndex(List,index, {
            ...item,
            text:value,
        });
        setList(newList);
    }
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(List,index,{
            ...item,
            isDone:!item.isDone,
        });
        setList(newList);
    };
    const deleteItem =() =>{
        const newList = removeItemAtIndex(List,index);
        setList(newList);
    };
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
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input 
            type="checkbox"
            checked={item.isDone}
            onChange={toggleItemCompletion}
            />
        </div>
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
export default TodoItem;