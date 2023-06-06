import { Component, OnInit, Input } from '@angular/core';
import { Resource, SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { displayDate, sampleData } from './event';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    
export interface Event {
  Title: String;
  Description: String;
  Start: Date;
  End: Date;
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  id :any
  opened = false
  eventForm !:FormGroup
  Events: SchedulerEvent[] =[]
  public selectedDate: Date = new Date();
  public events: SchedulerEvent[] = sampleData;
  currentYear = new Date().getFullYear();
  parseAdjust = (eventDate: string): Date => {
      const date = new Date(eventDate);
      date.setFullYear(this.currentYear);
      return date;
  };

   randomInt = (min:any, max:any): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
   displayDate = new Date(this.currentYear, 5, 24);
  
  constructor( private api :GenericService ,
               private auth :UserStoreService,
               private fb :FormBuilder){}
  
  getEvent(){
    this.api.getById("Event", this.id).subscribe({
      next: (res) => {
        this.Events =res.map((dataItem:any, index: number) =>(
           <SchedulerEvent> {
            id: index+1,
            start: this.parseAdjust(dataItem.start),
            startTimezone: dataItem.startTimezone,
            end: this.parseAdjust(dataItem.end),
            endTimezone: dataItem.endTimezone,
            isAllDay: false,
            title: dataItem.title,
            description: dataItem.description,
            recurrenceRule: "",
            recurrenceId: dataItem!.idf,
            recurrenceException: dataItem.RecurrenceException,
            roomId: dataItem.RoomID,
            ownerID: index+1
    }    
      )
      );
      },
      error: (err) => {
      },
    });
  }
  public close(): void { this.opened = false; }
  public open(): void { this.opened = true }
  
  ngOnInit() {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      start: ['', Validators.required],
      end: ['', Validators.required],
      userId : ['']})
    this.id = this.auth.getId()
    this.getEvent() 
  }
  onSubmit() {
    this.eventForm.get('userId')?.setValue(this.id);
    this.api.add("Event", this.eventForm.value).subscribe({
      next: (res) => {
        this.eventForm.reset(); 
        this.opened = false; 
        this.getEvent()
      },
      error: (err) => {
      },
    });
  }
}