import { createStore, applyMiddleware }  from 'redux';
import {addTodo} from './reducer/addTodo.reducer';
import logger from "redux-logger";

export const store = createStore(addTodo,applyMiddleware(logger)); //this helps to log all the items to do to get better visual of redux

