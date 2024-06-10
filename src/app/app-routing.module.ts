import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        loadChildren: () =>
            import('./tasks-content/shared-tasks.module').then(m => m.SharedTasksModule)
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
