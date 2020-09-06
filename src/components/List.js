import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const List =({todos}) => {
    return (
        <div style={{display: 'flex',flexDirection:"column"}}>
            <ul>
            {todos.map((todo,t) => (
            <li><Todo key={t} todo={todo} idx={t} /></li>
                ))}
            </ul>
        </div>
    );
};
const mapStateToProps = state => ({
    todos: state.todos
}); //convert todos into props
export default connect(mapStateToProps)(List); //connect action and reducer js files 
