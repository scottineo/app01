import { useRef } from "react";

export function AddItem({onAdd}) {
    const inputRef = useRef();
    
    function handleOnAddTask(event) {
        event.preventDefault();
        onAdd(inputRef.current.value);
    }
    return (
        <div className="add-item-container">
            <form onSubmit={handleOnAddTask}>
                <input type="text" ref={inputRef} />
                <button type="submit" >Adicionar</button>
            </form>
        </div>
    )
}