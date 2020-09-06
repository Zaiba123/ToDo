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
    type:"ADD_ DESCRIPTION",
    payload:value
});
