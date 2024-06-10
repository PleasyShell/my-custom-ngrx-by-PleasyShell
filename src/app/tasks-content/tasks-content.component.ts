import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TasksService } from "src/services/tasks.service";
import { TTaskList } from "./tasks-store";


@Component({
    selector: 'tasks-content',
    templateUrl: './tasks-content.component.html'
})

export class TasksContentComponent {


    constructor(
        private tasksService: TasksService
    ) { }


    protected getTasksListContent(): Observable<TTaskList[]> {

        return this.tasksService.getTasksList();
    };


    protected openModal() {

        this.tasksService.openTaskModal();
    };

};
