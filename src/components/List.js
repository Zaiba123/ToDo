import React from 'react';
import {atom } from  'recoil'
import TodoItemTitleCreator from './TodoItemTitleCreator';
import Typography from '@material-ui/core/Typography';
import { useRecoilValue } from 'recoil';
import {todosState }from '../recoil/atoms';


const List =() => {
    const todosList = useRecoilValue(todosState);
    return (
        <div style={{display: 'flex',flexDirection:"column",textAlign:"center"}}>
            <TodoItemTitleCreator />
            {/* <ul> */}
                {todosList.map((todoItem) => (
                    <TodoItemTitleCreator key={todoItem.id} item={todoItem} />
                ))}
            {/* {todos.map((todo,t) => (
                 <Typography variant="h5" gutterBottom>
                 <li className="item-style"><Todo key={t} todo={todo} idx={t} /></li>
               </Typography>
                ))} */}
            {/* </ul> */}
        </div>
    );
};

export default List;