import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
    TTaskState, loadTasks, selectTasks,
    TTaskList, openTasksModal, closeTasksModal,
    selectModalState
} from "src/app/tasks-content/tasks-store";


@Injectable()

export class TasksService {


    constructor(
        private store: Store<TTaskState>
    ) {
        this.store.dispatch(loadTasks());
        this.tasks$ = this.store.select(selectTasks);
        this.isModalOpen$ = this.store.select(selectModalState)
    };


    private tasks$: Observable<TTaskList[]>;
    private isModalOpen$: Observable<boolean>;


    public getTasksList(): Observable<TTaskList[]> {

        return this.tasks$;
    };

    public getModalState(): Observable<boolean> {

        return this.isModalOpen$;
    };


    public openTaskModal(item?: any) {

        this.store.dispatch(openTasksModal());
    };

    public closeTaskModal() {

        this.store.dispatch(closeTasksModal());
    };

};
