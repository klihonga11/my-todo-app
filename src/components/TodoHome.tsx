import { useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import type { TodoItem } from "./types/TodoItem";
import Filter from "./Filter";

function TodoHome() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const idCounter = useRef(0);

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

    function filterTodos(value: string) {
        const newList = [...todos];
        let filteredList = [];

        switch(value) {
            case "All":
                filteredList = newList;
                break;
            case "Completed":
                filteredList= newList.filter(item => item.selected === true);
                break;
            case "Active":
                filteredList = newList.filter(item => item.selected === false);
                break;
            default:
                filteredList = newList;
        }

        setTodos(filteredList);
    }

    return (
        <>
            <Filter onChange={filterTodos}></Filter>
            <TodoInput onAdd={addTodo}></TodoInput>
            <TodoList listItems={todos} onEdit={editTodo} onDelete={deleteTodo} onSelect={selectTodo}></TodoList>
        </>
    )
}

export default TodoHome;