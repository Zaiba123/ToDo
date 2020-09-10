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

export const addInputTitle = value => ({
    type:"ADD_INPUT_TITLE",
    payload:value
});
//TESTING
export const editInLine = obj => ({ //wanted to be able to change text in line
    type:"EDIT_INLINE",
    payload:obj
});

export const editInputBox = obj => ({ //This allows you to edit the form to rename
    type:"EDIT_INPUT_BOX",
    payload:obj
});
