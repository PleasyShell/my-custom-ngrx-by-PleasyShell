import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { TasksService } from "src/services/tasks.service";
import { TTaskState, loadTasks } from "./tasks-store";


@Component({
    selector: 'tasks-content',
    templateUrl: './tasks-content.component.html'
})

export class TasksContentComponent {


    constructor(
        private tasksService: TasksService
    ) { }


    protected getTasksListContent() {

        return this.tasksService.getTasksList();
    };


    protected openModal() {

        this.tasksService.openTaskModal();
    };

};
