import { createAction, props } from "@ngrx/store";
import { TTaskList } from "../state/tasks.state";


export enum ActionType {

    LOAD_TASKS = '[TasksList] load tasks',
    LOAD_TASKS_SUCCESS = '[TasksList] load tasks success',
};

export const loadTasks = createAction(ActionType.LOAD_TASKS);
export const loadTasksSuccess = createAction(ActionType.LOAD_TASKS_SUCCESS, props<{ tasks: TTaskList[] }>());