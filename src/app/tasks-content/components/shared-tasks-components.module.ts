import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksModalComponent } from './tasks-modal/tasks-modal.component';
import { SharedFieldsModule } from 'src/app/module-components/fields/shared-fields.module';
import { TasksModalService } from 'src/services/tasks/tasks-modal.service';
import { TASKS_ADD_MODAL_STATE_NAME, modalAddTaskReducer } from './tasks-modal/tasks-modal-store';
import { StoreModule } from '@ngrx/store';



@NgModule({
    declarations: [
        TasksModalComponent
    ],
    imports: [
        CommonModule,
        SharedFieldsModule,
        StoreModule.forFeature(TASKS_ADD_MODAL_STATE_NAME, modalAddTaskReducer),
    ],
    exports: [
        TasksModalComponent
    ],
    providers: [TasksModalService]
})
export class SharedTasksComponentsModule { }
