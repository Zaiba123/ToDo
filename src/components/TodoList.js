import React from 'react';
import {atom } from  'recoil';
import TodoItemCreator from './TodoItemCreator';
import Typography from '@material-ui/core/Typography';
import {  selector, useRecoilValue, useRecoilState } from "recoil";
import { itemsState }from '../recoil/atoms';
// import {removeItem} from '../recoil/selectors';
import TodoItem from './TodoItem';


function TodoList() {
  const [items, setItems] = useRecoilState(itemsState);
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setItems(
      items.concat({
        description: value,
        done: false
      })
    );

    setValue("");
  };
  // const deleteTodo = index => {
  //   const newTodos= [...item];
  //   newTodos.splice(index,1);
  //   setValue(newTodos); //call hook function
  // }
  //const todoList = useRecoilValue(list); //we are defining todoList to get the value of the atom we created
    return (
      <>
        <div style={{display: 'flex',flexDirection:"column",cursor:"pointer"}}>
          Add Something you want to get Done:
          <ul>
        {items.map((item, index) => (
         <li> <div key={index}>{item.description}</div></li>
        ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={e => setValue(e.target.value)} />
          <button disabled={!value}>Add</button>
          {/* <button onClick={() => deleteTodo()}>Delete</button> */}
        </form>
        </div>
      </>
    );
  }

export default TodoList;