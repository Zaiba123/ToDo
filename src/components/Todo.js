import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../action/addTodo.action';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import Icon from '@material-ui/core/Icon';


const Todo =({todo,idx, deleteTodo, editTodo, currentItem, description }) =>  {
   return(
       <div style={{display: 'flex',flexDirection:"row",justifyContent:"space-between", border:"1px solid",cursor:"pointer"}}>
            <div onClick ={() => editTodo(idx)}>
                {currentItem === idx ? description : todo}
               </div>
            <div>
                { currentItem === idx ? <Button color="primary" variant="outlined" onClick ={() => editTodo(idx)}> OK <DoneIcon/></Button> :
                <>
                <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} aria-label="delete" style={{ cursor:'pointer'}}onClick={() => deleteTodo(idx)}>Delete</Button>
                <Button variant="outlined" color="primary" onClick ={() => editTodo(idx)}><EditIcon/> Edit</Button>
                </>
                }
            </div>
       </div>
   );
};
const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key)),
    editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = state => ({
    description: state.description,
    currentItem: state.currentItem
})
export default connect(mapStateToProps,mapDispatchToProps)(Todo)