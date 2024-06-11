import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TasksService } from "src/services/tasks/tasks.service";
import { TTaskList } from "./tasks-store";
import { TasksModalService } from "src/services/tasks/tasks-modal.service";


@Component({
    selector: 'tasks-content',
    templateUrl: './tasks-content.component.html'
})

export class TasksContentComponent {


    constructor(
        private tasksService: TasksService,
        private modal: TasksModalService
    ) { }


    protected getTasksListContent(): Observable<TTaskList[]> {

        return this.tasksService.getTasksList();
    };


    protected openModal() {

        this.modal.openTaskModal();
    };

};
