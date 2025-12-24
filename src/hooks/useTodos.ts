import { useEffect, useRef, useState } from "react";
import type { TodoItem } from "../components/types/TodoItem";

export function useTodos() {
    const key = "todos";

    const [todos, setTodos] = useState<TodoItem[]>(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : []
    });

    const idCounter = useRef(0);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (item:string) => {
        setTodos([...todos, { id: idCounter.current, text: item, selected: false }]);
        idCounter.current++;
    }

    const editTodo = (index: number, item:string) => {
        const newList = [...todos];
        const itemAtIndex = newList[index];
        itemAtIndex.text = item;
        newList[index] = itemAtIndex;
        setTodos(newList);
    }

    const deleteTodo = (index:number) => {
        const newList = [...todos]
        newList.splice(index, 1)
        setTodos(newList)
    }

    const selectTodo = (index:number) => {
        const newList = [...todos];
        const itemAtSelectedIndex = newList[index];
        newList[index].selected = !itemAtSelectedIndex.selected;
        setTodos(newList);
    }

    const updateFilter = (value: string) => {
        setFilter(value);
    }

    const filteredList = filter === "All" ? todos : [...todos].filter(item => filter === "Completed" ? item.selected : !item.selected);

    return {
        addTodo,
        editTodo,
        deleteTodo,
        selectTodo,
        updateFilter,
        filteredList
    }
}