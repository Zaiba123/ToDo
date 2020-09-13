import React from 'react';
import {atom } from  'recoil';
import TodoItemCreator from './TodoItemCreator';
import Typography from '@material-ui/core/Typography';
import {  selector, useRecoilValue, useRecoilState } from "recoil";
import { itemsState, inputState }from '../recoil/atoms';
// import {removeItem} from '../recoil/selectors';
import TodoItem from './TodoItem';

import { Input, Button } from '@material-ui/core';
import './style.css'


function TodoList() {
  const [items, setItems] = useRecoilState(itemsState);
  const [value, setValue] = useRecoilState(inputState);
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
        <div>
          Add Something you want to get Done:
          <ul>
            {items.map((item, index) => console.log(index) || (
              <TodoItem key={index} {
                ...{
                  item,
                  index
                }
              } />
            ))}
          </ul>
          <Input value={value} onChange={e => setValue(e.target.value)} />
          <Button variant='outlined' disabled={!value} onClick={handleSubmit}>Add</Button>
          {/* <button onClick={() => deleteTodo()}>Delete</button> */}
        </div>
      </>
    );
  }

export default TodoList;