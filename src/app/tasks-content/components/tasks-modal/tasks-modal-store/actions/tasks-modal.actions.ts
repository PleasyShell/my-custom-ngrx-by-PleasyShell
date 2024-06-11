import { createAction, props } from "@ngrx/store";


export enum ActionType {

    OPEN_TASKS_MODAL = '[Modal] open tasks modal',
    CLOSE_TASKS_MODAL = '[Modal] close tasks modal',

    UPDATE_FIELD_NAME = '[Modal] update name',
    UPDATE_FIELD_SURNAME = '[Modal] update surname'
};

export const openTasksModal = createAction(ActionType.OPEN_TASKS_MODAL);
export const closeTasksModal = createAction(ActionType.CLOSE_TASKS_MODAL);

export const updateFieldName = createAction(ActionType.UPDATE_FIELD_NAME, props<{ name: string }>());
export const updateFieldSurname = createAction(ActionType.UPDATE_FIELD_SURNAME, props<{ surname: string }>());