import { useTodos } from "../hooks/useTodos";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";


describe("useTodos", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("adds to todo list", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo("gamma");
        });

        expect(result.current.filteredList).toHaveLength(1);
        expect(result.current.filteredList[0].text).toBe("gamma");
    });
})