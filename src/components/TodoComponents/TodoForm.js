import React from 'react';

const TodoForm = props => {
    
        console.log('rendering form');
        return (
            <form onSubmit={props.handleSubmit}>
            <input
             value={props.newTask}
             onChange={props.handleChanges}
             type='text'
             name='task'
             />
            <button>Add Task</button>
            </form>
        );
}

export default TodoForm;