import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListPageComponent } from './job-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: JobListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobListPageRoutingModule { }
