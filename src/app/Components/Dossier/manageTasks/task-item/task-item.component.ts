import { Component ,Input } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input()
  public product!: {
    productName: string;
    categoryName: string;
    unitPrice: number;
  };
}
