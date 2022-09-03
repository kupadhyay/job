import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobAddPageComponent } from './job-add-page.component';

const routes: Routes = [
  {
    path: '',
    component: JobAddPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobAddPageRoutingModule { }
