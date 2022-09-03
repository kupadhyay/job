import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jobService } from '../job-service';

@Component({
  selector: 'app-job-add-page',
  templateUrl: './job-add-page.component.html',
  styleUrls: ['./job-add-page.component.css']
})
export class JobAddPageComponent implements OnInit {
  jobAddForm: FormGroup
  constructor( private formBuilder: FormBuilder,
     private jobService: jobService, 
     private router: Router,
     private route: ActivatedRoute,
     private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.jobAddForm = this.formBuilder.group({
      id:[],
      job_number: [],
      job_title: [],
      job_start_date : [],
      job_close_date : [],
      experience_required : [],
      number_of_openings : [],
      job_notes : []
    });

    this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      if(params.id) {
        this.editRequest(params.id)
      }
    });
  }

  editRequest(id) {
    this.jobService.getJobById(id).subscribe(data => {
      this.jobAddForm.patchValue(data);
      this.jobAddForm.patchValue({id: id})
    })

  }
  onSubmit() {
    console.log(this.jobAddForm.value);
    if(this.jobAddForm.valid) {

      if(this.jobAddForm.value.id) { //edit case
        this.jobService.updateJob(this.jobAddForm.value.id, this.jobAddForm.value).subscribe(res => {
          this.toastrService.success("Job Updated successfully");
          this.router.navigate(["jobs"]);
        })
      } else { // add case
        this.jobService.addJob(this.jobAddForm.value).subscribe(res => {
          this.toastrService.success("Job Added successfully");
          this.router.navigate(["jobs"]);
        })
      }
      
    }
  }

}