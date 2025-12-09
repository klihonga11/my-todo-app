import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoHome() {
    const [todos, setTodos] = useState<string[]>([]);

    function addTodo(item:string) {
        setTodos([...todos,item])
    }

    return (
        <>
            <TodoInput onAdd={addTodo}></TodoInput>
            <TodoList listItems={todos}></TodoList>
        </>
    )
}

export default TodoHome;