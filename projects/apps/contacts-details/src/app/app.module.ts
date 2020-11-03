import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactsDetailsModule } from './contacts-details/contacts-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactsDetailsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
