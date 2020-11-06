import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsDetailsModule } from './contacts-details/contacts-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactsDetailsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
