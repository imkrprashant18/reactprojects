import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Helo world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid,
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    //     assignment update || edit todo
    //     updateTodo: (state, action) => {
    //       const { id, text } = action.payload;
    //       const updateTodos = state.todos.map((todo) =>
    //         todo.id === id ? "true" : "false"
    //       );
    //       state.todos = updateTodos;
    //     },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
