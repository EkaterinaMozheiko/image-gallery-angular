import { Item } from './../../item.model';
import { AppState } from './../../redux/app.state';
import { AddItem } from './../../redux/items.action';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dialog',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss', '../../app.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

export class PopupComponent {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  title: string = '';
  url: string = '';

  constructor(private store: Store<AppState>) { }

  onClose() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  onAdd() {
    if (this.title === ' ' || this.url === ' ') {
      return;
    }

  const item = new Item(Number(String(Math.random().toString(8).slice(2))), this.title, this.url);

  this.store.dispatch(new AddItem(item));

    this.title = '';
    this.url = '';
  }

}

