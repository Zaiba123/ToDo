const initState = {
    todos: [],

}

export const addTodo = (state = initState,action) => {
    if(action.type === action.ADD_TODO)
    return { ...state, todos:state.todos.concat(action.payload)};
    return state;
}