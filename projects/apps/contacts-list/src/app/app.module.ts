import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsListModule } from './contacts-list/contacts-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactsListModule, RouterModule.forRoot([], { useHash: true })],
  bootstrap: [AppComponent],
})
export class AppModule {}
