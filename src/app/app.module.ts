import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';



const appRoutes: Routes = [ {path: '', component: AppComponent}]


@NgModule({
  declarations: [
    AppComponent

   ],
  imports: [
    BrowserModule,
    HttpClientModule,
   BrowserAnimationsModule,
FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
