import { createAction } from "@ngrx/store";

export const OPEN_TASKS_MODAL = '[tasks] open tasks modal';
export const CLOSE_TASKS_MODAL = '[tasks] close tasks modal';

export const openTasksModal = createAction(OPEN_TASKS_MODAL);
export const closeTasksModal = createAction(CLOSE_TASKS_MODAL);