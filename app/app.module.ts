import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { AppRoutingModule }     from './app-routing.module';
import { ClubModule }    from './club/club.module';

@NgModule({
  imports:      [
    BrowserModule,
    ClubModule,
    AppRoutingModule
   ],
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
