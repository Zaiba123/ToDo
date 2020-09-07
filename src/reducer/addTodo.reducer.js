const initialState = {
    todos: [],
    inputTitle:'',
    todoText:"",
    currentItem: undefined, //this is for when someone wants to edit an item and clicks on it
};

export const addTodo = (state = initialState,action) => {
    switch (action.type){
        case "ADD_TODO":
            return { ...state, todos:state.todos.concat(action.payload),inputTitle:""};
        case "DELETE_TODO":
            return {...state,todos:state.todos.filter((todo,t)=> t !== action.payload)};
        case "EDIT_TODO":
            return {...state,inputTitle:state.todos[action.payload],currentItem:action.payload}; //now you are at the index of what you want to edit
        case "ADD_INPUT_TITLE":
            return {...state,inputTitle:action.payload};
        case "EDIT_INPUT_BOX":
                return {...state,todos:state.todos.map((todo,t) => t !== action.payload.currentItem ? todo : action.payload.value),currentItem:undefined,inputTitle:""}; //inputTitle is empty to clear out the text in box 
        case "EDIT_INLINE":
            return {...state,todos:state.todos.map((todo,t) => t !== action.payload.todoText ? todo : action.payload.value),todoText:"", inputTitle:""};

        //progress at inline editing:
        /*
            state.todoText.map((todoText, t) => {
                if (t !== action.t) {
                  return todoText
                }
            
                return {
                ...state,
                  ...todoText,
                  ...action.todoText
                }
              })
            return {...state,todoText:state.todos[action.payload],currentItem:action.payload}; //inputTitle is empty to clear out the text in box 
            inputTitle is empty to clear out the text in box
        */
    default:
    return state; 
};
}