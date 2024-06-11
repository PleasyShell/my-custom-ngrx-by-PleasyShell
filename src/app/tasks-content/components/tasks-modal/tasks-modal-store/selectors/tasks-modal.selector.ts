import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TAddTask } from "../state/tasks-modal.state";


export const TASKS_ADD_MODAL_STATE_NAME = 'TaskModal';
const selectTasksState = createFeatureSelector<TAddTask>(TASKS_ADD_MODAL_STATE_NAME);


export const selectModalState = createSelector(

    selectTasksState,
    (state: TAddTask) => state.isOpen
);

export const selectName = createSelector(
    selectTasksState,
    (state: TAddTask) => state.Content.Name
);

export const selectSurname = createSelector(
    selectTasksState,
    (state: TAddTask) => state.Content.Surname
);