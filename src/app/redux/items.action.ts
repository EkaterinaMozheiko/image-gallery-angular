import { Item } from './../item.model';
import { Action } from '@ngrx/store';

export namespace ITEM_ACTION {
  export const ADD_ITEM = 'ADD_ITEM';
  export const DELETE_ITEM = 'DELETE_ITEM';
}

export class AddItem implements Action {
  readonly type = ITEM_ACTION.ADD_ITEM;

  constructor(public payload: Item) {}
}

export class DeleteItem implements Action {
  readonly type = ITEM_ACTION.DELETE_ITEM;

  constructor(public payload: Item) {}
}

export type ItemsAction = AddItem | DeleteItem;
