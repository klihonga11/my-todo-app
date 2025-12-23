import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Filter from "./Filter";
import { useTodos } from "../hooks/useTodos";

function TodoHome() {
    const { addTodo, editTodo, deleteTodo, selectTodo, updateFilter, filteredList} = useTodos()

    return (
        <>
            <Filter onChange={updateFilter}></Filter>
            <TodoInput onAdd={addTodo}></TodoInput>
            <TodoList listItems={filteredList} onEdit={editTodo} onDelete={deleteTodo} onSelect={selectTodo}></TodoList>
        </>
    )
}

export default TodoHome;