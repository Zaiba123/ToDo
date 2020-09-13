import React from "react";
import TodoItem from './components/TodoItem';
import Typography from '@material-ui/core/Typography';
import TodoList from './components/TodoList';
import ListAltIcon from '@material-ui/icons/ListAlt';


export const App =()=>{
    return(
        <div>
            {/* <Header /> */}
            <Typography variant="h2" gutterBottom align="center">
              <u>What are you going <b>ToDo</b> today? <ListAltIcon fontSize="large"/></u>
            </Typography>
            <TodoItem />
            <TodoList  />
        </div>
    );
}