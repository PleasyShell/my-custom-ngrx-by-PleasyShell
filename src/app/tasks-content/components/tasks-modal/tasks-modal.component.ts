import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
    TTaskState, selectModalState,
    closeTasksModal
} from "../../tasks-store";
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
