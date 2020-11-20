import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarModule, ButtonModule } from '@nd/ui-ang';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AvatarModule, ButtonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
