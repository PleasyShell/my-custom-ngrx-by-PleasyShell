import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TTitleInput } from "src/app/module-components/fields";
import {
    TAddTask, selectModalState,
    openTasksModal, closeTasksModal
} from "src/app/tasks-content/components/tasks-modal/tasks-modal-store";

@Injectable()

export class TasksModalService {


    constructor(
        private store: Store<TAddTask>
    ) {
        this.isOpen$ = this.store.select(selectModalState);
    };


    private isOpen$: Observable<boolean>;


    public titleOfNameStatusInit: TTitleInput = {

        placeholder: 'Статус',
        value: ''
    };


    public getModalState(): Observable<boolean> {

        return this.isOpen$;
    };


    public openTaskModal(item?: any) {

        this.store.dispatch(openTasksModal());
    };

    public closeTaskModal() {

        this.store.dispatch(closeTasksModal());
    };

};