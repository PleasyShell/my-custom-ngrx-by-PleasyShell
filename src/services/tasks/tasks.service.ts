import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
    TTaskState, loadTasks, selectTasks,
    TTaskList
} from "src/app/tasks-content/tasks-store";


@Injectable()

export class TasksService {


    constructor(
        private store: Store<TTaskState>
    ) {
        this.store.dispatch(loadTasks());
        this.tasks$ = this.store.select(selectTasks);
    };


    private tasks$: Observable<TTaskList[]>;


    public getTasksList(): Observable<TTaskList[]> {

        return this.tasks$;
    };

};
