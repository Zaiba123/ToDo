import React from 'react';
import Todo from './Todo';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const List =({todos}) => {
    return (
        <div style={{display: 'flex',flexDirection:"column",textAlign:"center"}}>
            <ul>
            {todos.map((todo,t) => (
                 <Typography variant="h5"  gutterBottom>
                 <li className="item-style"><Todo key={t} todo={todo} idx={t} /></li>
               </Typography>
                ))}
            </ul>
        </div>
    );
};
const mapStateToProps = state => ({
    todos: state.todos
}); //convert todos into props
export default connect(mapStateToProps)(List); //connect action and reducer js files
