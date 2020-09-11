import React from 'react'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';


export default const Todo =({todo,idx, deleteTodo, editTodo, currentItem, inputTitle,editInLine,todoText,addTodo,editInputBox }) =>  {
    //This commented out code is a stepping stone for an more enhanced experience with inline editing

    /*
    const onChange = (e) => editTodo(e.target.value);
    */
    const handleSubmission = e => { //This allows the "OK" button to take you out of edit mode 
        e.preventDefault();
        if(currentItem || currentItem ===0)
        {
            editInputBox({value:inputTitle,currentItem:currentItem,editInLine:todoText})
        }
        else
        {
            addTodo(inputTitle);
        }
        };
   return(
       <div>
            <div style={{display: 'flex',flexDirection:"row",justifyContent:"space-between", border:"1px solid",cursor:"pointer"}}>
                    <div onClick ={() => editTodo(idx)}>
                        {currentItem === idx ? inputTitle : todo}
                    </div>
                    <div>
                        {/* Implementation of additional part to feature for enhanced user interface  */}

                        {/*
                        {/* This is the logic for transitioning between the edit and non edit mode  */}
                        
                        { (currentItem === idx )?
                        <Button color="primary" variant="outlined" type="submit" onClick={handleSubmission}> OK <DoneIcon/></Button>
                            :
                            <>
                            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} aria-label="delete" style={{ cursor:'pointer'}} type="submit" onClick={() => deleteTodo(idx)}>Delete</Button>
                            <Button variant="outlined" color="primary" type="submit" onClick ={() => editTodo(idx)}><EditIcon/> Edit</Button>
                            </>
                        }
                    </div> 

            </div>
       </div>

   );
};

