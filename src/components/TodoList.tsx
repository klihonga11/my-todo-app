import { useState } from "react";

type TodoListProps = {
    listItems: string[]
    onEdit: (index: number, item: string) => void
    onDelete: (index: number) => void
}

function TodoList({ listItems, onEdit, onDelete }: TodoListProps) {
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
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
                    onDelete = {() => onDelete(index)}/>
                )
            }
        </>
    )
}

type ListItemProps = {
    index: number,
    item: string,
    isEditing: boolean,
    onStartEdit: () => void
    onSave: () => void
    onChange: (value: string) => void
    onDelete: () => void
}

function ListItem({ item, isEditing, onStartEdit, onSave, onChange, onDelete } : ListItemProps) {
    return (
        <div >
            { isEditing ? 
                <>
                    <input id="inputEdit" value={item} onChange={(e) => onChange(e.target.value)}></input>
                    <button onClick={onSave}>Save</button>
                </>
            : 
                <>
                    <span>{item}</span>
                    <button onClick={onStartEdit}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </>
            }
        </div>
    )
}

export default TodoList;