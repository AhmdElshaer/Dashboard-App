import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialToDoList = { todoItems: [] };

const ToDoSlice = createSlice({
  name: 'toDo',
  initialState: initialToDoList,
  reducers: {
    setTodos(state, action) {
      state.todoItems = action.payload;
    },
    addToDo(state, action){
      const newTodo = action.payload;
      state.todoItems.push({
        id: state.todoItems.length + 1,
        title: newTodo.title
      });
    },
    removeTodo(state, action){
      const id = action.payload;
      state.todoItems = state.todoItems.filter((item) => item.id !== id);
    },
    editTodo(state, action){

    }
  }
});

const store = configureStore({
  reducer: { toDo: ToDoSlice.reducer }
});

export const toDoActions = ToDoSlice.actions;
export default store;