import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TTaskPageState } from "../state/tasks.state";


export const TASKS_STATE_NAME = 'tasks';
const selectTasksState = createFeatureSelector<TTaskPageState>(TASKS_STATE_NAME);


export const selectModalState = createSelector(

    selectTasksState,
    (state: TTaskPageState) => state.isOpenModal
);

export const selectTasks = createSelector(

    selectTasksState,
    (state: TTaskPageState) => state.TasksList
);