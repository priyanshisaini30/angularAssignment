import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})

export class Assignment2Component {

  selectedRow:Number;
  todoItems: TodoItem[] = [
    { id: 1, text: 'teach TypeScript', completed: false },
    { id: 2, text: 'teach Angular', completed: true },
    { id: 3, text: 'teach Node', completed: false },
    { id: 4, text: 'teach JavaScript', completed: true },
    { id: 5, text: 'teach CSS', completed: false }
  ];
 
  setClickedRow = function(index){
    this.selectedRow = index;
   }
}
export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
