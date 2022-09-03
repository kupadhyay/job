import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jobService } from '../job-service';

@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.css']
})
export class JobListPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'job_number', 'job_title', 'job_start_date', 'job_close_date','experience_required','number_of_openings','job_notes','action'];
  dataSource: Element[]
  constructor(
    private router: Router,
    private toastrService: ToastrService, 
    private jobService: jobService) { }

  ngOnInit(): void {
    this.fetchAllJob();
  }

  deleteRecord(element) {
    let text = "Are you sure you want to delete?";
    if (confirm(text) == true) {
      this.jobService.deleteJob(element.id).subscribe(data => {
        this.toastrService.success("Deleted succesfully")
        //Note need to refresh data
        this.fetchAllJob();
      })
      
    } 
  }

  editRecord(element) {
    this.router.navigate(["jobs/new/", element.id ])
  }

  fetchAllJob() {
    this.jobService.getAllJobs().subscribe(data => {
      this.dataSource = data;
    })
  }

}

export interface Element {
  id: number;
  job_number: string;
  job_title: string;
  job_start_date: string;
  job_close_date: string;
  experience_required: boolean;
  number_of_openings: number;
  job_notes: string
}