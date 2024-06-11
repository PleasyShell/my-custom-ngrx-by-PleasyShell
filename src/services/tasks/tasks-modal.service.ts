import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
    TAddTask, selectModalState,
    openTasksModal, closeTasksModal,
    selectName,
    selectSurname
} from "src/app/tasks-content/components/tasks-modal/tasks-modal-store";

@Injectable()

export class TasksModalService {


    constructor(
        private store: Store<TAddTask>
    ) {
        this.isOpen$ = this.store.select(selectModalState);
        this.titleOfNameInit$ = this.store.select(selectName);
        this.titleOfSurnameInit$ = this.store.select(selectSurname);
    };


    private isOpen$: Observable<boolean>;


    public titleOfNameInit$: Observable<string>;
    public titleOfSurnameInit$: Observable<string>;


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