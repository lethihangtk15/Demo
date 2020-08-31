import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { MenuComponent } from './menu/menu.component';
import { TongComponent } from './tong/tong.component';
import { TinhtongComponent } from './tinhtong/tinhtong.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    MenuComponent,
    TongComponent,
    TinhtongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
