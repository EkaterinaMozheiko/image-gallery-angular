import { Component } from '@angular/core';
import { Item, Items } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public items: Item[] = [
      new Item(1, 'Cats', 'assets/cats.jpg' ),
      new Item(2, 'Flower', 'assets/flower.jpg' ),
      new Item(3, 'Dolphins', 'assets/dolphins.jpg' ),
      new Item(4, 'Mountain', 'assets/mountain.jpeg' ),
      new Item(5, 'Tower', 'assets/tower.jpg' )
  ];
  
  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  onAdd(item: Item) {
    this.items.push(item);
  }
}
