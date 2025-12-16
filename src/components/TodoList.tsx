import { useState } from "react";
import type { TodoItem } from "./types/TodoItem";

type TodoListProps = {
    listItems: TodoItem[]
    onEdit: (index: number, item: string) => void
    onDelete: (index: number) => void
}

function updateSelectedItems(index: number, list: number[]) {
    if (list.includes(index)) {
        list.splice(list.indexOf(index), 1)
    } else {
        list.push(index)
    }

    return list;
}

function TodoList({ listItems, onEdit, onDelete }: TodoListProps) {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    return(
        <>
            <p>List of items: </p>
            {listItems.map((item,index) => 
                <ListItem key={index} 
                    index={index} 
                    item={item}
                    isEditing = {editingIndex === index} 
                    onStartEdit = {() => setEditingIndex(index)}
                    onSave = {() => setEditingIndex(null)}
                    onChange = {(value:string) => onEdit(index, value)}
                    onDelete = {() => onDelete(index)} 
                    selected = {selectedItems.includes(index)}
                    onSelect = {() => setSelectedItems(updateSelectedItems(index, [...selectedItems]))} />
                )
            }
        </>
    )
}

type ListItemProps = {
    index: number,
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