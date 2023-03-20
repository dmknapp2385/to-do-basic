import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { SingleTaskComponent } from './single-task/single-task.component';

const routes: Routes = [
  { path: 'task', component: AddTaskComponent },
  { path: '', redirectTo: '/task', pathMatch: 'full' },
  {path: 'task/:id', component: SingleTaskComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
