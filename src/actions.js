import * as actions from './actionTypes';

// export const itemAdded = description => ({
//     type: actions.ITEM_ADDED,
//         payload:{
//             description //update from below implementation is that description is not hardcoded
//         }
// });

//Another way to write this :

export function itemAdded(description){
    return{
        type: actions.ITEM_ADDED,
        payload:{
            description: "Walk One Mile"
        }
    }
}
