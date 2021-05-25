import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FirstoneComponent } from './firstone/firstone.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, FirstoneComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
