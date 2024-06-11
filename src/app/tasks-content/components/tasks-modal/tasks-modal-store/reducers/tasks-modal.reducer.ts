import { Action, createReducer, on } from "@ngrx/store";
import { resetInitAddTaskModalState } from "../state/resets/tasks-modal.reset-state";
import { closeTasksModal, openTasksModal, updateFieldName, updateFieldSurname } from "../actions/tasks-modal.actions";
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
    })),

    on(updateFieldName, (state, { name }) => ({
        ...state,
        Content: {
            ...state.Content,
            Name: name
        }
    })),
    on(updateFieldSurname, (state, { surname }) => ({
        ...state,
        Content: {
            ...state.Content,
            Surname: surname
        }
    }))
);

export function modalAddTaskReducer(state: TAddTask | undefined, action: Action) {

    return _modalAddTaskReducer(state, action);
};