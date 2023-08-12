import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule
import { AppComponent } from './app.component';
import { DocumentFormComponent } from './document-form/document-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Include the AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
