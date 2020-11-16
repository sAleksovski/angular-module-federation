import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { ContactsListWidgetModule } from './contacts-list/contacts-list-widget.module';
import { ContactsListModule } from './contacts-list/contacts-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ContactsListModule,
    // ContactsListWidgetModule,
    RouterModule.forRoot([], { useHash: true }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
