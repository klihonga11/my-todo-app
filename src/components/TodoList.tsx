import { useState } from "react";

type TodoListProps = {
    listItems: string[]
}

function TodoList({ listItems }: TodoListProps) {
    return(
        <>
            <p>List of items: </p>
            {listItems.map((item,index) => <ListItem key={index} item={item}/>)}
        </>
    )
}

type ListItemProps = {
    item: string
}

function ListItem({item}: ListItemProps) {
    const [editMode,setEditMode] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<string>(item);

    if(editMode) {
        return (
            <div>
                <input id="inputEdit" value={editItem} onChange={(e) => setEditItem(e.target.value)}></input>
                <button onClick={() => setEditMode(false)}>Save</button>
            </div>
        )
    }

    return (
        <div>
            <span>{editItem}</span>
            <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
    )
}

export default TodoList;