import { legacy_createStore as createStore } from "redux"
import todoReducer from "./reducers/todoReducer";

export const store= createStore(todoReducer)