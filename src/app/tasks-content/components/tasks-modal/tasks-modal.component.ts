import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TasksModalService } from "src/services/tasks/tasks-modal.service";
import { TAddTask, updateFieldName, updateFieldSurname } from "./tasks-modal-store";


@Component({
    selector: 'tasks-modal',
    templateUrl: './tasks-modal.component.html'
})

export class TasksModalComponent {


    constructor(
        private modal: TasksModalService,
        protected store: Store<TAddTask>
    ) {
        this.titleOfName = modal.titleOfNameInit$;
        this.titleOfSurname = modal.titleOfSurnameInit$;
    };


    protected titleOfName: Observable<string>;
    protected titleOfSurname: Observable<string>;

    protected test = this.store


    protected modalState(): Observable<boolean> {

        return this.modal.getModalState();

    };

    protected modalMode(): boolean {

        return this.modal.getModalMode();
    };


    protected onNameChange(name: string) {

        this.store.dispatch(updateFieldName({ name }));
    };

    protected onSurnameChange(surname: string) {

        this.store.dispatch(updateFieldSurname({ surname }));
    };


    protected closeModal() {

        this.modal.closeTaskModal();
    };


    protected save() {

        this.store.subscribe(x => {

            console.log(x)
        });
    };

};
