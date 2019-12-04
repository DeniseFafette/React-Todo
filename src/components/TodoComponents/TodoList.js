// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    //const sorted list = props.groceries.sort((a, b) => a.completed - b.completed);

    return (
        <div className='task-list'>
            {props.tasks.map(task => (
                <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
            <button className='clear-btn' onClick={props.clearCompleted}>
                Clear Tasks
            </button>
            </div>
    );
};

export default TodoList;