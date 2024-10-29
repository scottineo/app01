import { TodoItem } from "./TodoItem";
import React, {useState} from 'react';

const TASK_LIST = [
    {
        id:1,
        name: "Tarefa 1",
        isComplete: false,
    },
    {
        id:2,
        name: "Tarefa 2",
        isComplete: false,
    },
    {
        id:3,
        name: "Tarefa 3",
        isComplete: false,
    }
]
export function TodoList() {
    const [tasks, setTasks] = useState(TASK_LIST);
function handleOnCheck(task){
    const updatedTasks = tasks.map((t) => {
        if (task.id === t.id){
                t.isComplete = task.isComplete;
        }
        return t;
    });

    setTasks(updatedTasks);
}
    return(
        <section className="task-list-container">
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}><TodoItem task={task} />
                    <TodoItem task={task} onCheck={handleOnCheck}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}