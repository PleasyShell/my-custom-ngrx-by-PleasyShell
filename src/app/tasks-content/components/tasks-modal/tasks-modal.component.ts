import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
    TTaskState, selectModalState,
    closeTasksModal
} from "../../tasks-store";

@Component({
    selector: 'tasks-modal',
    templateUrl: './tasks-modal.component.html'
})
export class TasksModalComponent {


    constructor(
        private store: Store<TTaskState>
    ) {
        this.isModalOpen$ = this.store.select(selectModalState);
    };


    protected isModalOpen$: Observable<boolean>;


    protected closeModal() {

        this.store.dispatch(closeTasksModal());
    };

};
