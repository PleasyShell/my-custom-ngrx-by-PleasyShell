import { createAction, props } from "@ngrx/store";
import { TTaskList } from "../state/tasks.state";


export enum ActionType {

    LOAD_TASKS = '[TasksList] load tasks',
    LOAD_TASKS_SUCCESS = '[TasksList] load tasks success',

    OPEN_TASKS_MODAL = '[isOpenModal] open tasks modal',
    CLOSE_TASKS_MODAL = '[isOpenModal] close tasks modal'
};

export const loadTasks = createAction(ActionType.LOAD_TASKS);
export const loadTasksSuccess = createAction(ActionType.LOAD_TASKS_SUCCESS, props<{ tasks: TTaskList[] }>());

export const openTasksModal = createAction(ActionType.OPEN_TASKS_MODAL);
export const closeTasksModal = createAction(ActionType.CLOSE_TASKS_MODAL);
