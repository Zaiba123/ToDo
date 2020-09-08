import React from "react";
import InputField from './components/InputField';
import Typography from '@material-ui/core/Typography';
import List from './components/List';
import ListAltIcon from '@material-ui/icons/ListAlt';


export const App =()=>{
    return(
        <div>
            <Typography variant="h2" gutterBottom align="center">
              <u>What are you going <b>ToDo</b> today? <ListAltIcon fontSize="large"/></u>
            </Typography>
            <InputField />
            <List  />
        </div>
    );
}