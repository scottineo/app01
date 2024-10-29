import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";
import React, { useState } from 'react';

const TASK_LIST = [
    {
        id: 1,
        name: "Tarefa 1",
        isComplete: false,
    },
    {
        id: 2,
        name: "Tarefa 2",
        isComplete: false,
    },
    {
        id: 3,
        name: "Tarefa 3",
        isComplete: false,
    }
]
export function TodoList() {
    const [tasks, setTasks] = useState(TASK_LIST);

    function handleOnCheck(task) {
        const updatedTasks = tasks.map((t) => {
            if (task.id === t.id) {
                t.isComplete = task.isComplete;
            }
            return t;
        });

        setTasks(updatedTasks);
    }

    function handleOnAdd(task) {
        const updatedTasks = tasks.concat({ id: tasks.length + 1, name: task, isComplete: false });
        setTasks(updatedTasks);
    }

    return (
        <section className="task-list-container">
            <h1>Lista de Tarefas</h1>
            <div>
                <p><strong>Total de tarefas</strong>{tasks.length}</p>
                <p><strong>Tarefas pendentes </strong>{tasks.filter(t => t.isComplete === false).length}</p>
                <p><strong>Tarefas completas </strong>{tasks.filter(t => t.isComplete === true).length}</p>

            </div>
            <AddItem onAdd={handleOnAdd} />
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TodoItem task={task} onCheck={handleOnCheck} />
                    </li>
                ))}
            </ul>
        </section>
    )
}