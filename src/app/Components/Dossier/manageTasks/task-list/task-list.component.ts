import { Component } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  public products: any[] = products;

  public handleFilterChange(query: string): void {
    const normalizedQuery = query.toLowerCase();
    const filterExpession = (item: { productName: string; categoryName: string; }) =>
      item.productName.toLowerCase().indexOf(normalizedQuery) !== -1 ||
      item.categoryName.toLowerCase().indexOf(normalizedQuery) !== -1;

    this.products = products.filter(filterExpession);
  }

}
