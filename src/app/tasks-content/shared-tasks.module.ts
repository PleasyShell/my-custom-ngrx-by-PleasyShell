import { NgModule } from "@angular/core";
import {
    TasksContentComponent, TasksModalComponent,
    TasksRoutingModule
} from ".";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ApiService } from "src/services/api.service";
import { TasksService } from "src/services/tasks.service";
import {
    TASKS_STATE_NAME, tasksReducer,
    TasksEffects
} from "./tasks-store";


@NgModule({
    declarations: [
        TasksContentComponent,
        TasksModalComponent
    ],
    imports: [
        CommonModule,
        TasksRoutingModule,
        StoreModule.forFeature(TASKS_STATE_NAME, tasksReducer),
        EffectsModule.forFeature([TasksEffects]),
    ],
    providers: [TasksService, ApiService]
})

export class SharedTasksModule { }
