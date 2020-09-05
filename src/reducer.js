import * as actions from './actionTypes';

//[]
let lastId=0;

export default function reducer(state=[],action){ //reducer is a pure function, if you call function mutliple times it will give same results and free of side effects 
    if(actions.ITEM_ADDED)
    return [
        ...state, //copy all the items from current state
        {
            id:++lastId, //increment everytime add an item
            description: "walk one mile", //had to hard code because line below was giving errors
            // description: action.payload.description,
            resolved:false
        }
    ];
    return state; //if action doesnt exist, return current state
}
