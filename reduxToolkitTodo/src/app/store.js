import {configureStore} from '@reduxjs/toolkit'
import { TodoReducer } from '../features/todo/todoSlice';

//Its like a global variable to give access of Reducer
export const store = configureStore({
    reducer: TodoReducer
});