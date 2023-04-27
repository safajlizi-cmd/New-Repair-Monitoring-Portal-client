import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
   AssignForm !: FormGroup
   constructor(private fb:FormBuilder , private api :GenericService){}
  ngOnInit(): void {
    this.AssignForm = this.fb.group({
      assignmentNumber: ['', Validators.required],
      cause: ['', Validators.required],
      dupedName: ['', Validators.required],
      dossierId: ['']
    });
  }
  onSubmit() {
    this.AssignForm.get('dossierId')?.setValue("this.id");
    this.api.add("Assignment/Add",this.AssignForm.value).subscribe({
      next: (res) => {
        alert('Assignment added successfully')
        this.AssignForm.reset(); // reset the task object after submitting the form
      },
      error: (err) => {
        alert("error adding ")
      },
    });
  }
}
