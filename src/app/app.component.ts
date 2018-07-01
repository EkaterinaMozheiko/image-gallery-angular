import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Item, Items } from './item.model';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public items: Item[] = [];
  public itemState: Observable<AppState>;

  constructor(private store: Store<Items>) {}
  /* deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  } */

  ngOnInit() {
    /* this.store.select('itemPage').subscribe(({items}) => {
      this.items = items;
    }); */
    this.itemState = this.store.select('itemPage');
  }
}
