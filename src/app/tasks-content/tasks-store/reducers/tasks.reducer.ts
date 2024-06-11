import { Action, createReducer, on } from "@ngrx/store";
import { resetInitTaskPageState } from "../state/resets/tasks.reset-state";
import { TTaskPageState } from "../state/tasks.state";
import { loadTasks, loadTasksSuccess } from "../actions/tasks.actions";


const _tasksReducer = createReducer(
    resetInitTaskPageState,

    on(loadTasks, (state) => state),
    on(loadTasksSuccess, (state, { tasks }) => ({

        ...state,
        TasksList: tasks
    })),

);

export function tasksReducer(state: TTaskPageState | undefined, action: Action) {

    return _tasksReducer(state, action);
};