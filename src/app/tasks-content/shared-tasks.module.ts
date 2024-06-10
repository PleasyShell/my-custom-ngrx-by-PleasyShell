import { NgModule } from "@angular/core";
import {
    TasksContentComponent, TasksModalComponent,
    TasksRoutingModule
} from ".";
import { CommonModule } from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ApiService } from "src/services/tasks/api.service";
import { TasksService } from "src/services/tasks/tasks.service";
import {
    TASKS_STATE_NAME, tasksReducer,
    TasksEffects
} from "./tasks-store";
import { SharedFieldsModule } from "../module-components/fields";
import { FormsModule } from "@angular/forms";


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
        SharedFieldsModule,
        FormsModule
    ],
    providers: [TasksService, ApiService]
})

export class SharedTasksModule { }
