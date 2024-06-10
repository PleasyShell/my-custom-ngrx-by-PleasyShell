import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksContentComponent } from './tasks-content.component';


const routes: Routes =
    [
        { path: '', component: TasksContentComponent }
    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class TasksRoutingModule { }
