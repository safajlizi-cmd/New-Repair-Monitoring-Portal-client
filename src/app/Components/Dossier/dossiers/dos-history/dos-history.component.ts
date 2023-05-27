import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { isTemplateMiddleOrTemplateTail } from 'typescript';

@Component({
  selector: 'app-dos-history',
  templateUrl: './dos-history.component.html',
  styleUrls: ['./dos-history.component.css']
})
export class DosHistoryComponent implements OnInit {
   
   history: any[]=[]
   id:any
    constructor(private api :GenericService , private userStore: UserStoreService){
    }

    getHistory()
    {   this.api.getById("History/GetById",this.id).subscribe({
        next: (res) => {
         console.log(res)
          this.history =res;
          console.log(this.history)
        },
        error: (err) => {
          alert("error")
        },
      });
    }
    ngOnInit(): void {
      this.id = this.userStore.getDossierId()
      this.getHistory()

    }
}
