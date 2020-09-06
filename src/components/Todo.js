import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo } from '../action/addTodo.action';

const Todo =({todo,idx, deleteTodo }) =>  {
   return(
       <div style={{display: 'flex',flexDirection:"row",justifyContent:"space-between", border:"1px solid"}}>
            <div>{todo}</div>
            <div style={{padding:"2px", border:"2px solid", cursor:'pointer'}}onClick={() => deleteTodo(idx)}>Delete</div>
       </div>
   );
};
const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key))
});
export default connect(null,mapDispatchToProps)(Todo);