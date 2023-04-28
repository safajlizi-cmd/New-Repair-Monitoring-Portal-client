import { Component, Input, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-assg-details',
  templateUrl: './assg-details.component.html',
  styleUrls: ['./assg-details.component.css']
})
export class AssgDetailsComponent implements OnInit {
  @Input() id :any;
  assignment:any
  constructor(private api :GenericService){}
  getAssignment(){
    this.api.getById("Assignment/GetById",this.id).subscribe({
      next: (res) => {
        this.assignment =res;
      },
      error: (err) => {
      },
    });
  }
  ngOnInit(): void {
    this.getAssignment();
  }
}
