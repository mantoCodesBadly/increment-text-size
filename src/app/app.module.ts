import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponent } from './components/text/text.component';
import { NumberComponent } from './components/number/number.component';
import { NumberObsComponent } from './components/numberobs/numberobs.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    NumberComponent,
    NumberObsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
