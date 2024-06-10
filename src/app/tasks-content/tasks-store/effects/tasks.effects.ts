import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs";
import { loadTasks, loadTasksSuccess } from "../actions/tasks.actions";
import { ApiService } from "src/services/api.service";



@Injectable()
export class TasksEffects {


    constructor(
        private actions$: Actions,
        private api: ApiService
    ) { }


    protected loadTasks$ = createEffect(() =>

        this.actions$.pipe(
            ofType(loadTasks),
            mergeMap(() =>
                this.api.getTasks().pipe(
                    map(tasks => loadTasksSuccess({ tasks }))
                ))
        ));

    // protected openTasksModal$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(openTasksModal),
    //         mergeMap(() => 
    //         this.tasksService.g)
    //     )
    // )
};
