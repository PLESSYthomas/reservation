import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ReservationComponent } from './reservation/reservation.component';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { ContactComponent } from './contact/contact.component';
import { ProposComponent } from './propos/propos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Vehicule', component: VehiculesComponent },
  { path: 'Reservation', component: ReservationComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Propos', component: ProposComponent },
  { path: 'Disponibilite', component: DisponibiliteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
 
]

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ReservationComponent,
    DisponibiliteComponent,
    VehiculesComponent,
    ContactComponent,
    ProposComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
	FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
