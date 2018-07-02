import { Item } from './../item.model';
import { ITEM_ACTION, ItemsAction } from './items.action';

const initialState = {
  items: [
    new Item(1, 'Cats', 'assets/cats.jpg' ),
    new Item(2, 'Flower', 'assets/flower.jpg' ),
    new Item(3, 'Dolphins', 'assets/dolphins.jpg' ),
    new Item(4, 'Mountain', 'assets/mountain.jpeg' ),
    new Item(5, 'Tower', 'assets/tower.jpg' )
  ]
};

export function itemsReducer(state = initialState, action: ItemsAction) {
  switch (action.type) {
    case ITEM_ACTION.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case ITEM_ACTION.DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.payload.id)]
    };
    default:
     return state;
  }
}
