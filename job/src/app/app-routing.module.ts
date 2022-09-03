import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'jobs',
    loadChildren: () => import('./job-list-page//job-list-page.module').then(m => m.JobListPageModule)
    
  },
  {
    path: 'jobs/new',
    loadChildren: () => import('./job-add-page/job-add-page.module').then(m => m.JobAddPageModule)
  },
  {
    path: 'jobs/new/:id',
    loadChildren: () => import('./job-add-page/job-add-page.module').then(m => m.JobAddPageModule)
  },
  {
    path: '**',
    redirectTo: 'jobs'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/