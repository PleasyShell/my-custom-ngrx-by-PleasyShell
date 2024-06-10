import { ActionReducerMap } from "@ngrx/store";
import { TTaskState } from "../state/tasks.state";
import { tasksReducer } from "./tasks.reducer";

export const reducers: ActionReducerMap<TTaskState> = {

    Tasks: tasksReducer
};