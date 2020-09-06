import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../action/addTodo.action';
import { Button } from '@material-ui/core';


const Todo =({todo,idx, deleteTodo, editTodo, currentItem, description,addTodo }) =>  {
   return(
       <div style={{display: 'flex',flexDirection:"row",justifyContent:"space-between", border:"1px solid",cursor:"pointer"}}>
            <div >
                {currentItem === idx ? description : todo}
               </div>
            <div>
                { currentItem === idx ?  <Button onClick ={() => editTodo(idx)}>OK</Button> :
                <>
                <Button style={{ cursor:'pointer'}}onClick={() => deleteTodo(idx)}>Remove</Button>
                <Button onClick ={() => editTodo(idx)}>Rename</Button>
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