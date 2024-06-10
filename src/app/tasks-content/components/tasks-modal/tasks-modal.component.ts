import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TasksService } from "src/services/tasks.service";

@Component({
    selector: 'tasks-modal',
    templateUrl: './tasks-modal.component.html'
})
export class TasksModalComponent {


    constructor(
        private tasksService: TasksService
    ) { }


    protected modalState(): Observable<boolean> {

        return this.tasksService.getModalState();
    };


    protected closeModal() {

        this.tasksService.closeTaskModal();
    };

};
