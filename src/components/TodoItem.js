export function TodoItem({ task, onCheck }) {
    function handleOnChange(event) {
        console.log("onCheck:", onCheck);
        onCheck({ ...task, isComplete: event.target.checked });
    }
    return (
        <div className="task-item">
            <input type="checkbox" checked={task.isComplete} onChange={handleOnChange} /> {task.name}
        </div>
    )
}