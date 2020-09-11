import React from "react";
import TodoItem from './components/TodoItem';
import Typography from '@material-ui/core/Typography';
import List from './components/List';
import ListAltIcon from '@material-ui/icons/ListAlt';


export const App =()=>{
    return(
        <div>
            {/* <Header /> */}
            <Typography variant="h2" gutterBottom align="center">
              <u>What are you going <b>ToDo</b> today? <ListAltIcon fontSize="large"/></u>
            </Typography>
            <TodoItem />
            <List  />
        </div>
    );
}