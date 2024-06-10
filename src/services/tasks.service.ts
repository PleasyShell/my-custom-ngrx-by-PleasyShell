import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTasks, openTasksModal } from 'src/app/tasks-content/tasks-store/actions/tasks.actions';
import { selectTasks } from 'src/app/tasks-content/tasks-store/selectors/tasks.selector';
import { TTaskList, TTaskState } from 'src/app/tasks-content/tasks-store/state/tasks.state';

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


    public openTaskModal(item?: any) {

        this.store.dispatch(openTasksModal());
    };

};
