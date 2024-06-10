import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContentComponent } from './tasks-content.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksService } from 'src/services/tasks.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './tasks-store/reducers/tasks.reducer';
import { TasksEffects } from './tasks-store/effects/tasks.effects';
import { TASKS_STATE_NAME } from './tasks-store/selectors/tasks.selector';


@NgModule({
    declarations: [
        TasksContentComponent
    ],
    imports: [
        CommonModule,
        TasksRoutingModule,
        StoreModule.forFeature(TASKS_STATE_NAME, tasksReducer),
        EffectsModule.forFeature([TasksEffects]),
    ],
    providers: [TasksService]
})
export class SharedTasksModule { }
