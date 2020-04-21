import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})

export class Assignment1Component {

 
  value = '';
  onEnter(value: string) { this.value = value; }
}
