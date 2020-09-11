import React from 'react';
import {Todo} from './Todo';
import Typography from '@material-ui/core/Typography';

const List =({todos}) => {
    return (
        <div style={{display: 'flex',flexDirection:"column",textAlign:"center"}}>
            <ul>
                hi
            {/* {todos.map((todo,t) => (
                 <Typography variant="h5" gutterBottom>
                 <li className="item-style"><Todo key={t} todo={todo} idx={t} /></li>
               </Typography>
                ))} */}
            </ul>
        </div>
    );
};

export default List;