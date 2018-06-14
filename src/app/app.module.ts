import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './shared components/info/info.component';
import { HeaderComponent } from './shared components/header/header.component';
import { FooterComponent } from './shared components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
