import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTasks, selectModalState } from './tasks-store/selectors/tasks.selector';
import { TTaskState, TTaskList } from './tasks-store/state/tasks.state';
import { openTasksModal } from './tasks-store/actions/tasks-modal.actions';
import { loadTasks } from './tasks-store/actions/tasks-page.actions';

@Component({
    selector: 'app-tasks-content',
    templateUrl: './tasks-content.component.html'
})

export class TasksContentComponent {


    constructor(
        private store: Store<TTaskState>
    ) {
        this.tasks$ = this.store.select(selectTasks);
        this.isModalOpen$ = this.store.select(selectModalState);
    };


    protected isModalOpen$: Observable<boolean>;
    protected tasks$: Observable<TTaskList[]>


    ngOnInit() {

        this.store.dispatch(loadTasks());

        this.isModalOpen$.subscribe(x => {
            console.log(x)
        });
    };


    protected openModal() {

        this.store.dispatch(openTasksModal());

        this.isModalOpen$.subscribe(x => {
            console.log(x)
        });
    };

};
