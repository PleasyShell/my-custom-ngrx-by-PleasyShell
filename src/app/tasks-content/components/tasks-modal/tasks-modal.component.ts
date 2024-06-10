import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TTitleInput } from "src/app/module-components/fields";
import { TasksService } from "src/services/tasks/tasks.service";

@Component({
    selector: 'tasks-modal',
    templateUrl: './tasks-modal.component.html'
})
export class TasksModalComponent {


    constructor(
        public tasksService: TasksService
    ) {

        this.titleOfNameStatus = tasksService.titleOfNameStatusInit; 
    };


    protected titleOfNameStatus: TTitleInput;


    protected modalState(): Observable<boolean> {

        return this.tasksService.getModalState();
    };


    protected closeModal() {

        this.tasksService.closeTaskModal();
    };

};
