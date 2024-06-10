import { createAction, props } from "@ngrx/store";
import { TTaskList } from "../state/tasks.state";


export const LOAD_TASKS_ACTION = '[tasks] load tasks';
export const LOAD_TASKS_SUCCESS = '[tasks] load tasks success';


export const loadTasks = createAction(LOAD_TASKS_ACTION);
export const loadTasksSuccess = createAction(LOAD_TASKS_SUCCESS, props<{ tasks: TTaskList[] }>());
