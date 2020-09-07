import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo, editTodo,editInLine,addTodo,editInputBox } from '../action/addTodo.action';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';


const Todo =({todo,idx, deleteTodo, editTodo, currentItem, inputTitle,editInLine,value,todoText,addTodo,editInputBox }) =>  {
     const onChange = (e) => editTodo(e.target.value);
     const isEditMode = false;
     const handleSubmission = e => {
        e.preventDefault();
        if(currentItem || currentItem===0)
        {
            editInputBox({value:inputTitle,currentItem:currentItem,editInLine:todoText})
        }
        else
        {
            addTodo(todoText);
        }
        };
   return(
       <div>
       <div style={{display: 'flex',flexDirection:"row",justifyContent:"space-between", border:"1px solid",cursor:"pointer"}}>
           
            <div onClick ={() => editTodo(idx)}>
                {currentItem === idx ? currentItem : todo}
            </div> 
            
            <div>
            {/* { !isEditMode ?
                <div>
                    {todo}
                    <button onClick ={() => editInLine(idx)}> Edit </button>
                    <button onClick={() => deleteTodo(idx)}> Delete </button>
                </div>

                :
                <div>
                    <input 
                        placeholder={todo}
                        onChange={onChange}
                    />
                    <button> ok </button>
                </div>
            } */}

                { (currentItem === idx )? 
                ( <form>
                    <input type="text"  value={todoText } name="todo" onChange={onChange}/>
                    <Button color="primary" variant="outlined" onSubmit={handleSubmission} type="submit" onClick ={() => editInLine(idx)}> OK <DoneIcon/></Button> }
                    <Button type="submit"  variant="outlined" value={inputTitle} name="todo" onClick={this.handleSubmit}> Add Item </Button>
                </form> 
                ) :
                <>
                <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} aria-label="delete" style={{ cursor:'pointer'}} type="submit" onClick={() => deleteTodo(idx)}>Delete</Button>
                <Button variant="outlined" color="primary" type="submit" onClick ={() => editInLine(idx)}><EditIcon/> Edit</Button>

                </>
                }
            </div> 

       </div>
       </div>

   );
};
const mapDispatchToProps = dispatch => ({
    addTodo : todo => dispatch(addTodo(todo)),
    deleteTodo: key => dispatch(deleteTodo(key)),
    editInputBox: obj => dispatch(editInputBox(obj)),
    editTodo: key => dispatch(editTodo(key)),
    editInLine: obj => dispatch(editInLine(obj))
});

const mapStateToProps = state => ({
    inputTitle: state.inputTitle,
    currentItem: state.currentItem
})
export default connect(mapStateToProps,mapDispatchToProps)(Todo)