import React from "react";
import InputField from './components/InputField';
import Typography from '@material-ui/core/Typography';
import List from './components/List';


export const App =()=>{
    return(
        <div>
            <Typography variant="h2" component="h2" gutterBottom>
              What are you going ToDo today?
            </Typography>
            {/* <h1>What are you going ToDo today?</h1> */}
            <InputField />
            <List  />
        </div>
    );
}