//Third party stuff
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ApartmentListingsComponent } from './apartment-listings/apartment-listings.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { LoginComponent } from './login/login.component';
//Services
import { ApartmentDataService } from './apartment-data/apartment-data.service';
import { SessionDataService } from './session-data/session-data.service';
const routes: Route[] = [
  { path: 'login', component: LoginComponent},
  { path: '',      component: ApartmentListingsComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ApartmentListingsComponent,
    ApartmentDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers:[ApartmentDataService, SessionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }