import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PopupComponent } from './component/popup/popup.component';
import { itemsReducer } from './redux/items.reducer';
import { ItemBlockComponent } from './component/item-block/item-block.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ItemBlockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({itemPage: itemsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
