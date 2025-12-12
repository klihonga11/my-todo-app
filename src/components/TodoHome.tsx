import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoHome() {
    const [todos, setTodos] = useState<string[]>([]);

    function addTodo(item:string) {
        setTodos([...todos,item]);
    }

    function editTodo(index: number, item:string) {
        const newList = [...todos];
        newList[index] = item;
        setTodos(newList);
    }

    function deleteTodo(index:number) {
        const newList = [...todos]
        newList.splice(index, 1)
        setTodos(newList)
    }

    return (
        <>
            <TodoInput onAdd={addTodo}></TodoInput>
            <TodoList listItems={todos} onEdit={editTodo} onDelete={deleteTodo}></TodoList>
        </>
    )
}

export default TodoHome;