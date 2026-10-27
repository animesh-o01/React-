import React, {createContext, useContext} from "react";

export const Todocontext = createContext({
    todos: [{
        id: Number,
        todo: "todo msg",
        completed: false
    }],
    addTodo: (id, todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const UseTodo = () => {
    return useContext(Todocontext);
}

export const TodoProvider = Todocontext.Provider;