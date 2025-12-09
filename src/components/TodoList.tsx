type TodoListProps = {
    listItems: string[]
}

function TodoList({ listItems }: TodoListProps) {
    return(
        <>
            <p>List of items: </p>
            <ul>
               {listItems.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default TodoList;