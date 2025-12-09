import { useState } from "react";

function TodoInput() {
    const [todoItem,setTodoItem] = useState("");

    return (
        <>
            <label htmlFor="item">Item: </label>
            <input id="item" type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)}/>
        </>
    )
}

export default TodoInput;