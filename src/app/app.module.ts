import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './shared components/info/info.component';
import { HeaderComponent } from './shared components/header/header.component';
import { FooterComponent } from './shared components/footer/footer.component';
import { HomeComponent } from './main view/home/home.component';
import { ComplexComponent } from './main view/complex/complex.component';
import { EntityComponent } from './main view/entity/entity.component';
import { ProjectComponent } from './main view/project/project.component';
import { AdminComponent } from './main view/Users/admin/admin.component';
import { BIMModelComponent } from './main view/bimmodel/bimmodel.component';
import { DashboardComponent } from './main view/home/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ComplexComponent,
    EntityComponent,
    ProjectComponent,
    AdminComponent,
    BIMModelComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
