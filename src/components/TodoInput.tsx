import { useState } from "react";

type TodoInputProps = {
    onAdd: (item:string) => void 
}

function TodoInput({onAdd}: TodoInputProps) {
    const [todoItem,setTodoItem] = useState<string>("");

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onAdd(todoItem);
        setTodoItem("");
    }

    return (
        <>
            <form onSubmit={onSubmit} >
                <label htmlFor="item">Item: </label>
                <input id="item" type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default TodoInput;