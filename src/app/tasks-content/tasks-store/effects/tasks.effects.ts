import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TasksService } from "src/services/tasks.service";
import { map, mergeMap } from "rxjs";
import { loadTasks, loadTasksSuccess } from "../actions/tasks.actions";


@Injectable()
export class TasksEffects {


    constructor(
        private actions$: Actions,
        private tasksService: TasksService
    ) { }


    protected loadTasks$ = createEffect(() =>

        this.actions$.pipe(
            ofType(loadTasks),
            mergeMap(() =>
                this.tasksService.getTasks().pipe(
                    map(tasks => loadTasksSuccess({ tasks }))
                ))
        ));
};
