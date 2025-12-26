import { useEffect, useState } from "react";
import type { TodoItem } from "../components/types/TodoItem";
import type { FilterStatus } from "../components/types/FilterStatus";

export function useTodos() {
    const key = "todos";

    const [todos, setTodos] = useState<TodoItem[]>(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : []
    });

    const [filter, setFilter] = useState<FilterStatus>("All");

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text:string) => {
        setTodos(prev => [...prev, { id: crypto.randomUUID(), text, selected: false }]);
    }

    const editTodo = (id: string, text:string) => {
        setTodos(prev =>
            prev.map(
                todo => todo.id === id ? {...todo, text } : todo
            )
        );
    }

    const deleteTodo = (id:string) => {
        setTodos(prev =>
            prev.filter(
                todo => todo.id !== id 
            )
        );
    }

    const selectTodo = (id:string) => {
        setTodos(prev =>
            prev.map(
                todo => todo.id === id ? {...todo, selected: !todo.selected } : todo
            )
        );
    }

    const updateFilter = (value: FilterStatus) => {
        setFilter(value);
    }

    const filteredList = filter === "All" ? todos : todos.filter(item => filter === "Completed" ? item.selected : !item.selected);

    return {
        addTodo,
        editTodo,
        deleteTodo,
        selectTodo,
        updateFilter,
        filteredList
    }
}