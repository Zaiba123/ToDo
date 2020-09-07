import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo, editTodo,editInLine } from '../action/addTodo.action';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';


const Todo =({todo,idx, deleteTodo, editTodo, currentItem, inputTitle,editInLine,props }) =>  {
     const handleChange = (e) => editInLine(e.target.value);
   return(
       <div>
       <div style={{display: 'flex',flexDirection:"row",justifyContent:"space-between", border:"1px solid",cursor:"pointer"}}>
           <div onClick ={() => editTodo(idx)}>
                {currentItem === idx ? inputTitle : todo}
            </div>
            <div>
                { (currentItem === idx )? 
                ( <form>
                    <input type="text"  value={inputTitle } name="todo" onChange={handleChange}/>
                    <Button color="primary" variant="outlined" value={editInLine} onClick ={() => editInLine(idx)} type="submit"> OK <DoneIcon/></Button>
                    {/* <Button type="submit"  variant="outlined" value={inputTitle} name="todo" onClick={this.handleSubmit}> Add Item </Button> */}
                </form> 
                ) :
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
const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key)),
    editTodo: key => dispatch(editTodo(key)),
    editInLine: obj => dispatch(editInLine(obj))
});

const mapStateToProps = state => ({
    inputTitle: state.inputTitle,
    currentItem: state.currentItem
})
export default connect(mapStateToProps,mapDispatchToProps)(Todo)