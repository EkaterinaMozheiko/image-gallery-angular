import { Item } from './../item.model';
import { Action } from '@ngrx/store';

export namespace ITEM_ACTION {
  export const ADD_ITEM = 'ADD_ITEM';
}

export class AddItem implements Action {
  readonly type = ITEM_ACTION.ADD_ITEM;

  constructor(public payload: Item) {}
}
