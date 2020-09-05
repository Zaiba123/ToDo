const initState = {
    todos: [],

}

export const addTodo = (state = initState,action) => {
    switch (action.type){ //made a switch statement for different cases, useful when changing between adding and deleting 
        case "ADD_TODO":
    return { ...state, todos:state.todos.concat(action.payload)};
    default:
    return state;
};
}