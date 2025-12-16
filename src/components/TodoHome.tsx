import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Filter from "./Filter";
import type { TodoItem } from "./types/TodoItem";

function TodoHome() {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    function addTodo(item:string) {
        setTodos([...todos, { text: item, selected: false }]);
    }

    function editTodo(index: number, item:string) {
        const newList = [...todos];
        const itemAtIndex = newList[index];
        itemAtIndex.text = item;
        newList[index] = itemAtIndex;
        setTodos(newList);
    }

    function deleteTodo(index:number) {
        const newList = [...todos]
        newList.splice(index, 1)
        setTodos(newList)
    }

    return (
        <>
            <Filter></Filter>
            <TodoInput onAdd={addTodo}></TodoInput>
            <TodoList listItems={todos} onEdit={editTodo} onDelete={deleteTodo}></TodoList>
        </>
    )
}

export default TodoHome;