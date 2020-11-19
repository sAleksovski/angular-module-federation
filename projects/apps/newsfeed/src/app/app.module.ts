import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsfeedModule } from './newsfeed/newsfeed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NewsfeedModule, RouterModule.forRoot([], { useHash: true })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
