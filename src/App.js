import React from "react";
import InputField from './components/InputField';
import Typography from '@material-ui/core/Typography';
import List from './components/List';


export const App =()=>{
    return(
        <div>
            <Typography variant="h2" gutterBottom align="center">
              What are you going ToDo today?
            </Typography>
            <InputField />
            <List  />
        </div>
    );
}