import { useState } from "react";
import type { TodoItem } from "./types/TodoItem";
import { Button, Checkbox, HStack, Input, Spacer } from "@chakra-ui/react";

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
    );
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
        <HStack align="flex-start" w="100%">
            { isEditing ? 
                <>
                    <Input variant="subtle" id="inputEdit" value={item.text} onChange={(e) => onChange(e.target.value)}></Input>
                    <Button onClick={onSave}>Save</Button>
                </>
            : 
                <>
                    <Checkbox.Root checked={selected} onChange={onSelect}>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control>
                            <Checkbox.Indicator />
                        </Checkbox.Control>
                        <Checkbox.Label />
                    </Checkbox.Root>

                    { selected ? 
                        <s>{item.text}</s> : 
                        <>
                            <span>{item.text}</span>
                            <Spacer/>
                            <Button onClick={onStartEdit}>Edit</Button>
                            <Button onClick={onDelete}>Delete</Button>
                        </>
                    }
                </>
            }
        </HStack>
    );
}

export default TodoList;