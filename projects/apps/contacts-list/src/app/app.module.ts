import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactsListModule } from './contacts-list/contacts-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactsListModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
