import React from "react";
import InputField from './components/InputField';
import List from './components/List';


export const App =()=>{
    return(
        <div>
            <h1>What are you going ToDo today?</h1>
            <InputField />
            <List  />
        </div>
    );
}