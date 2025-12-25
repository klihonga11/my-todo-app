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
        setTodos(prev => [...prev, { id: idCounter.current, text: item, selected: false }]);
        idCounter.current++;
    }

    const editTodo = (id: number, text:string) => {
        setTodos(prev =>
            prev.map(
                todo => todo.id === id ? {...todo, text } : todo
            )
        );
    }

    const deleteTodo = (id:number) => {
        setTodos(prev =>
            prev.filter(
                todo => todo.id !== id 
            )
        );
    }

    const selectTodo = (id:number) => {
        setTodos(prev =>
            prev.map(
                todo => todo.id === id ? {...todo, selected: !todo.selected } : todo
            )
        );
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