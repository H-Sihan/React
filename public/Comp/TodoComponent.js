import React from 'react';

let taskId = 1;

function TodoComponent({title}) {
    const [todo, setTodo] = React.useState([]);


    const todoHtml = todo.map ( task => <li key={task.id}>{task.name}</li>);

    return (
            <div>

            <h1>{title || 'My Todo List'}</h1>

            <div>
            <h2>Add something to your todo list</h2>
            <fieldset>
            <input type='text' id='task' />
            <input type='button' id='btn1' value='Go!' onClick={addTask} />
            </fieldset>
            </div>

            Here is your todo list:
            <ul>
            {todoHtml}
            </ul>

            </div>
        );



    function addTask() {
        const tasks = structuredClone(todo);
        const newTask = {
            id: taskId++,
            name: document.getElementById('task').value
        };
        tasks.push(newTask);
        setTodo(tasks);
    }
}

export default TodoComponent;