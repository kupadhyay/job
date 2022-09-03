import {
    HttpClient,
    HttpHeaders,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  
  import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class jobService {
    baseUrl: string = 'http://localhost:3000/jobs/'; 
    constructor(private httpClient: HttpClient,private toastr: ToastrService) { }
    
    getAllJobs(): Observable<any> {
        return this.httpClient.get(this.baseUrl)
    }

    getJobById(id) : Observable<any> {
        return this.httpClient.get(this.baseUrl + id)
    }

    addJob(jobObj): Observable<any> {
        return this.httpClient.post(this.baseUrl, jobObj)
    }

    updateJob(id, jobObj) : Observable<any> {
        return this.httpClient.put(this.baseUrl + id, jobObj)
    }

    deleteJob(id) : Observable<any> {
        return this.httpClient.delete(this.baseUrl+ id)
    }

  }

//   GET - http://localhost:3000/jobs
// GET - http://localhost:3000/jobs/:id
// POST - http://localhost:3000/jobs
// PUT - http://localhost:3000/jobs/:id
// DELETE - http://localhost:3000/jobs/:id