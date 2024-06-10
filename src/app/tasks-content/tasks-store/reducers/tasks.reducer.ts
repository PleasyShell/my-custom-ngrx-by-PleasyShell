import { Action, createReducer, on } from "@ngrx/store";
import { initTaskPageState } from "../state/resets/tasks.reset-state";
import { TTaskPageState } from "../state/tasks.state";
import { openTasksModal, closeTasksModal } from "../actions/tasks-modal.actions";
import { loadTasks, loadTasksSuccess } from "../actions/tasks-page.actions";


const _tasksReducer = createReducer(
    initTaskPageState,

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