const initialState = {
    todos: [],
    description:'',
    testVariable:"",
    currentItem: undefined, //this is for when someone wants to edit an item and clicks on it
};

export const addTodo = (state = initialState,action) => {
    switch (action.type){
        case "ADD_TODO":
            return { ...state, todos:state.todos.concat(action.payload),description:""};
        case "DELETE_TODO":
            return {...state,todos:state.todos.filter((todo,t)=> t !== action.payload)};
        case "EDIT_TODO":
            return {...state,testVariable:state.todos[action.payload],currentItem:action.payload}; //now you are at the index of what you want to edit
        case "ADD_DESCRIPTION":
            return {...state,description:action.payload};
        case "EDIT_ITEM": //edit description
                return {...state,todos:state.todos.map((todo,t) => t !== action.payload.currentItem ? todo : action.payload.value),currentItem:undefined,description:""}; //description is empty to clear out the text in box 
        case "EDIT_INLINE":
            return {...state,todos:state.todos.map((todo,t) => t !== action.payload.currentItem ? todo : action.payload.value),currentItem:undefined,description:""}; //description is empty to clear out the text in box 

    default:
    return state;
};
}