import React, { useState } from 'react';
import {atom } from  'recoil'
import { useRecoilValue,useSetRecoilState } from 'recoil';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import {todosState }from '../recoil/atoms';

let id=0;
function getId() {
    return id++;
}

const TodoItemTitleCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodosList = useSetRecoilState(todosState);
    const addItems = () => {
        setTodosList((oldTodos) => [
            ...oldTodos,
            {
                id: getId(),
                text: inputValue,
                isDone: false,
            },
        ]);
        setInputValue('');
    };
    // const onChange = ({ target: {value}}) => {
    //     setInputValue(value);
    // };
    const onClick = e => {
        e.preventDefault();
        if(!inputValue) return;
        addItems(inputValue);
        // setInputValue('');
      }
    return (
        <div>
            <form>
                <input type="text" value={inputValue} placeholder="Add todo" onChange={e => setInputValue(e.target.value)} />
                <button onClick={onClick}>Add</button>
            </form>
        </div>
    );
}
export default TodoItemTitleCreator
