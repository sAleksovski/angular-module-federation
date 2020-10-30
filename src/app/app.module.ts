import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarModule, ButtonModule } from '@nd/ui-ang';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, AvatarModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
