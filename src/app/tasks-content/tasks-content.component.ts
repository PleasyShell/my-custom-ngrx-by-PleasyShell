import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { TasksService } from "src/services/tasks/tasks.service";
import { TTaskList } from "./tasks-store";
import { TasksModalService } from "src/services/tasks/tasks-modal.service";
import { TAddTaskContent } from "./components/tasks-modal/tasks-modal-store";


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


    protected openModal(item?: TAddTaskContent) {


        ///тест того, что если бы мы редактировали данные
        const fakeItem: TAddTaskContent = {
            Id: 1,
            Name: 'Test',
            Surname: 'Test Me pls'
        }

        this.modal.openTaskModal(fakeItem);
    };

};
