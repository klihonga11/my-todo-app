import { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import type { TodoItem } from "./types/TodoItem";
import Filter from "./Filter";

function TodoHome() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const idCounter = useRef(0);
    const [filter, setFilter] = useState("All");

    function addTodo(item:string) {
        setTodos([...todos, { id: idCounter.current, text: item, selected: false }]);
        idCounter.current++;
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

    function selectTodo(index:number) {
        const newList = [...todos];
        const itemAtSelectedIndex = newList[index];
        newList[index].selected = !itemAtSelectedIndex.selected;
        setTodos(newList);
    }

    const filteredList = filter === "All" ? todos : [...todos].filter(item => filter === "Completed" ? item.selected : !item.selected);

    return (
        <>
            <Filter onChange={(value) => setFilter(value) }></Filter>
            <TodoInput onAdd={addTodo}></TodoInput>
            <TodoList listItems={filteredList} onEdit={editTodo} onDelete={deleteTodo} onSelect={selectTodo}></TodoList>
        </>
    )
}

export default TodoHome;