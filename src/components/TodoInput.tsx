import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

type TodoInputProps = {
    onAdd: (item:string) => void 
}

function TodoInput({onAdd}: TodoInputProps) {
    const [todoItem,setTodoItem] = useState<string>("");

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onAdd(todoItem);
        setTodoItem("");
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <HStack>
                    <Input placeholder="Item" variant="subtle" id="item" type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)}/>
                    <Button type="submit">Add</Button>
                </HStack>
            </form>
        </>
    );
}

export default TodoInput;