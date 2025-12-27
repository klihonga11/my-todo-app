import { NativeSelect } from "@chakra-ui/react";
import type { FilterStatus } from "./types/FilterStatus";

type FilterProps = {
    onChange: (value: FilterStatus) => void
}

function Filter({ onChange }: FilterProps) {
    return (
        <>
            <NativeSelect.Root variant="subtle">
                <NativeSelect.Field defaultValue="All" onChange={(e) => onChange(e.target.value as FilterStatus)}>
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
            </NativeSelect.Root>
        </>
    )
}

export default Filter;