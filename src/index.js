import store from "./store";
import { itemAdded} from "./actions";

//state = reducer(state,action);

store.dispatch(itemAdded("Walk One Mile"));

console.log(store.getState());

