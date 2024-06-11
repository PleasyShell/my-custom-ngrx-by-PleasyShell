import { Action, createReducer, on } from "@ngrx/store";
import { resetInitAddTaskModalState } from "../state/resets/tasks-modal.reset-state";
import { closeTasksModal, openTasksModal } from "../actions/tasks-modal.actions";
import { TAddTask } from "../state/tasks-modal.state";

const _modalAddTaskReducer = createReducer(
    resetInitAddTaskModalState,

    on(openTasksModal, (state) => ({

        ...state,
        isOpen: true
    })),
    on(closeTasksModal, (state) => ({

        ...state,
        isOpen: false
    }))
);

export function modalAddTaskReducer(state: TAddTask | undefined, action: Action) {

    return _modalAddTaskReducer(state, action);
};