import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAddPageComponent } from './job-add-page.component';

describe('JobAddPageComponent', () => {
  let component: JobAddPageComponent;
  let fixture: ComponentFixture<JobAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
