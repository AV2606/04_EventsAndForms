import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from "./TodosDemo/TodoApp";

const todoDetails = JSON.parse(localStorage.getItem("todos")) || [
    { id: "todo-0", name: "Sugondese", completed: false },
    { id: "todo-1", name: "Ligma", completed: false },
    { id: "todo-2", name: "Joe", completed: false },
];

const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
};

export default function ToDosApp() {
    const FILTER_NAMES = Object.keys(FILTER_MAP);
    return (
        <TodoApp tasks={todoDetails}
            FILTER_NAMES={FILTER_NAMES}
            FILTER_MAP={FILTER_MAP} />
    );
}
