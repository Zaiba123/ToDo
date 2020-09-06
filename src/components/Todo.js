import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../action/addTodo.action';

const Todo =({todo,idx, deleteTodo, editTodo, currentItem, description }) =>  {
   return(
       <div style={{display: 'flex',flexDirection:"row",justifyContent:"space-between", border:"1px solid",cursor:"pointer"}}>
            <div onClick ={() => editTodo(idx)}>
                {currentItem === idx ? description : todo}
               </div>
            <div style={{padding:"2px", border:"2px solid", cursor:'pointer'}}onClick={() => deleteTodo(idx)}>Delete</div>
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