import type { FilterStatus } from "./types/FilterStatus";

type FilterProps = {
    onChange: (value: FilterStatus) => void
}

function Filter({ onChange }: FilterProps) {
    return (
        <>
            <label htmlFor="filterOptions">Filter: </label>
            <select defaultValue="All" id="filterOptions" name="filterOptions" onChange={(e) => onChange(e.target.value as FilterStatus)}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
            </select>
        </>
    )
}

export default Filter;