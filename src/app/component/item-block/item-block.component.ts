import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from '../../item.model';
import { AppState } from '../../redux/app.state';
import { DeleteItem } from '../../redux/items.action';

@Component({
  selector: 'app-item',
  templateUrl: './item-block.component.html',
  styleUrls: ['./item-block.scss']
})
export class ItemBlockComponent {

  @Input() item: Item;

  constructor(private store: Store<AppState>) {}

  onDelete() {
    this.store.dispatch(new DeleteItem(this.item));
  }
}