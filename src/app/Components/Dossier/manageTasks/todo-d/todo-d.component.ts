import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-d',
  templateUrl: './todo-d.component.html',
  styleUrls: ['./todo-d.component.css']
})
export class TodoDComponent implements OnInit{
  
  tasks :any[]=[];
  inprogress :any[]=[];
  done : any []=[];
  constructor(){}
  ngOnInit(): void {
    
  }
}
