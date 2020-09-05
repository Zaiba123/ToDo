import * as actions from './actionTypes';

//[]
let lastId=0;

export default function reducer(state=[],action){ //reducer is a pure function, if you call function mutliple times it will give same results and free of side effects 
    if(action.type === actions.ITEM_ADDED)
    return [
        ...state, //copy all the items from current state
        {
            id:++lastId, //increment everytime add an item
            description: action.payload.description, //not hard coded anymore
            resolved:false
        }
    ];
    return state; //if action doesnt exist, return current state
}
