type FilterProps = {
    onChange: (value: string) => void
}

function Filter({ onChange }: FilterProps) {
    return (
        <>
            <label htmlFor="filterOptions">Filter: </label>
            <select defaultValue="All" id="filterOptions" name="filterOptions" onChange={(e) => onChange(e.target.value)}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
            </select>
        </>
    )
}

export default Filter;