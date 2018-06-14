import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Dodana schema.
import { RouterModule, Routes } from '@angular/router'; // Dodano za rute.

// App component.
import { AppComponent } from './app.component';
// Home component.
import { HomeComponent } from './main view/home/home.component';
// Shared components.
import { HeaderComponent } from './shared components/header/header.component';
import { FooterComponent } from './shared components/footer/footer.component';
import { InfoComponent } from './shared components/info/info.component';
// Special components.
import { DashboardComponent } from './main view/home/dashboard/dashboard.component';
import { AdminComponent } from './main view/Users/admin/admin.component';
import { BIMModelComponent } from './main view/bimmodel/bimmodel.component';
import { PageNotFoundComponent } from './errorcomponent/pagenotfound/pagenotfound.component';
// Complex, Entity, Project components.
import { ComplexComponent } from './main view/complex/complex.component';
import { EntityComponent } from './main view/entity/entity.component';
import { ProjectComponent } from './main view/project/project.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'complex', component: ComplexComponent },
  { path: 'entity', component: EntityComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'bimmodel', component: BIMModelComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

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
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
