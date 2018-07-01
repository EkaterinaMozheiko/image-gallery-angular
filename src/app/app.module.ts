import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PopupComponent } from './component/popup.component';
import { itemsReducer } from './redux/items.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent
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
