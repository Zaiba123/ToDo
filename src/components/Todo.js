import React from 'react'

const Todo =({todo}) =>  {
   return(
       <div style={{display: 'flex',flexDirection:"row",justifyContent:"space-between", border:"1px solid"}}>
            {todo}
            <div>Delete</div>
       </div>
   )
}
export default Todo;