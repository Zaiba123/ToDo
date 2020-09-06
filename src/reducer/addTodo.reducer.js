const initialState = {
    todos: [],
    description:''
};

export const addTodo = (state = initialState,action) => {
    switch (action.type){ 
        case "ADD_TODO":
            return { ...state, todos:state.todos.concat(action.payload),description:""};
        case "DELETE_TODO":
            return {...state,todos:state.todos.filter((todo,t)=> t !== action.payload)};
        case "EDIT_TODO":
            return {...state,description:state.todos[action.payload]};
        case "ADD_ DESCRIPTION":
            return {...state,description:action.payload};
    default:
    return state;
};
}