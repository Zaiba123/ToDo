export const addTodo = todo => ({
    type:"ADD_TODO",
    payload:todo
});

export const deleteTodo = key => ({
    type:"DELETE_TODO",
    payload:key
});

export const editTodo = key => ({
    type:"EDIT_TODO",
    payload:key
});

export const addDescription = value => ({
    type:"ADD_DESCRIPTION",
    payload:value
});
//TESTING
export const editInLine = value => ({ //wanted to be able to change text in line 
    type:"EDIT_INLINE",
    payload:value
});

export const editItem = obj => ({ //This allows you to edit the form to rename
    type:"EDIT_ITEM",
    payload:obj
});
