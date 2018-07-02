import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { Items, Item } from './item.model';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';
import { DeleteItem } from './../app/redux/items.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  // @Input() item: Item;

  public itemState: Observable<Items>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    /* this.store.select('itemPage').subscribe(({items}) => {
      this.items = items;
    }); */
    this.itemState = this.store.select('itemPage');
  }

  /*onDelete() {
    this.store.dispatch(new DeleteItem(this.item));
  }*/
}
