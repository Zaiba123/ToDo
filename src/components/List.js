import React from 'react';
import { connect } from 'react-redux';

const List =({todos}) => {
    return (
        <div>
            <ul>
            {todos.map((todo,t) => (
            <li key={todos.id}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};
const mapStateToProps = state => ({
    todos: state.todos
}); //convert todos into props
export default connect(mapStateToProps)(List); //connect action and reducer js files 
