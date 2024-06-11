import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TTitleInput } from "src/app/module-components/fields";
import { TasksModalService } from "src/services/tasks/tasks-modal.service";


@Component({
    selector: 'tasks-modal',
    templateUrl: './tasks-modal.component.html'
})

export class TasksModalComponent {


    constructor(
        public modal: TasksModalService
    ) {

        this.titleOfNameStatus = modal.titleOfNameStatusInit;
    };


    protected titleOfNameStatus: TTitleInput;


    protected modalState(): Observable<boolean> {

        return this.modal.getModalState();
    };


    protected closeModal() {

        this.modal.closeTaskModal();
    };

};
