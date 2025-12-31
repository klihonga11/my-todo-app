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

    it("edits a todo item", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo("alpha");
        });

        const id = result.current.filteredList[0].id;

        act(() => {
            result.current.editTodo(id, "omega");
        });

        expect(result.current.filteredList[0].text).toBe("omega");
    });

    it("deletes a todo item", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo("apple");
        });

        const id = result.current.filteredList[0].id;

        act(() => {
            result.current.deleteTodo(id);
        });

        expect(result.current.filteredList).toHaveLength(0);
    });

    it("filters a todo list", () => {
        const { result } = renderHook(() => useTodos());

        act(() => {
            result.current.addTodo("A");
            result.current.addTodo("B");
            result.current.addTodo("C");
        });

        const id = result.current.filteredList[0].id;

        act(() => {
            result.current.selectTodo(id);
            result.current.updateFilter("Completed");
        });

        expect(result.current.filteredList).toHaveLength(1);
        expect(result.current.filteredList[0].text).toBe("A");
    });
});