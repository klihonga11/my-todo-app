import { useState } from "react";
import type { TodoItem } from "./types/TodoItem";

type TodoListProps = {
    listItems: TodoItem[]
    onEdit: (id: string, text: string) => void
    onDelete: (id: string) => void
    onSelect: (id: string) => void
}

function TodoList({ listItems, onEdit, onDelete, onSelect }: TodoListProps) {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    return(
        <>
            <p>List of items: </p>
            {listItems.map((item,index) => 
                <ListItem key={item.id} 
                    item={item}
                    isEditing = {editingIndex === index} 
                    onStartEdit = {() => setEditingIndex(index)}
                    onSave = {() => setEditingIndex(null)}
                    onChange = {(value:string) => onEdit(item.id, value)}
                    onDelete = {() => onDelete(item.id)} 
                    selected = {item.selected}
                    onSelect = {() => onSelect(item.id)} />
                )
            }
        </>
    )
}

type ListItemProps = {
    item: TodoItem,
    isEditing: boolean,
    onStartEdit: () => void,
    onSave: () => void,
    onChange: (value: string) => void,
    onDelete: () => void,
    selected: boolean,
    onSelect: () => void
}

function ListItem({ item, isEditing, onStartEdit, onSave, onChange, onDelete, selected, onSelect } : ListItemProps) {
    return (
        <div>
            { isEditing ? 
                <>
                    <input id="inputEdit" value={item.text} onChange={(e) => onChange(e.target.value)}></input>
                    <button onClick={onSave}>Save</button>
                </>
            : 
                <>
                    <input type="checkbox" checked={selected} onChange={onSelect}/>
                    { selected ? 
                        <s>{item.text}</s> : 
                        <>
                            <span>{item.text}</span>
                            <button onClick={onStartEdit}>Edit</button>
                            <button onClick={onDelete}>Delete</button>
                        </>
                    }
                </>
            }
        </div>
    )
}

export default TodoList;