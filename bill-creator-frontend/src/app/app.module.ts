import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListShopComponent } from './list-shop/list-shop.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { UpdateShopComponent } from './update-shop/update-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    ListShopComponent,
    CreateShopComponent,
    UpdateShopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
