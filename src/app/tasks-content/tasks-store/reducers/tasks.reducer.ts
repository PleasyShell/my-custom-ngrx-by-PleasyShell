import { Action, createReducer, on } from "@ngrx/store";
import { resetInitTaskPageState } from "../state/resets/tasks.reset-state";
import { TTaskPageState } from "../state/tasks.state";
import {
    closeTasksModal, loadTasks,
    loadTasksSuccess, openTasksModal
} from "../actions/tasks.actions";


const _tasksReducer = createReducer(
    resetInitTaskPageState,

    on(loadTasks, (state) => state),
    on(loadTasksSuccess, (state, { tasks }) => ({

        ...state,
        TasksList: tasks,
        isOpenModal: false
    })),

    on(openTasksModal, (state) => ({

        ...state,
        isOpenModal: true
    })),
    on(closeTasksModal, (state) => ({

        ...state,
        isOpenModal: false
    }))

);

export function tasksReducer(state: TTaskPageState | undefined, action: Action) {

    return _tasksReducer(state, action);
};