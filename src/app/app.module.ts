// import des différents composants externes

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import des différents composants internes

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
import { HttpClientModule } from '@angular/common/http';
import { MesreservComponent } from './mesreserv/mesreserv.component';
import { GestionreservComponent } from './gestionreserv/gestionreserv.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component'
import { AuthService } from './auth.service'
import { AuthGuard } from './auth.guard'
import { UserService } from './user.service'
import { CarService } from './car.service'
import { MessageService } from './message.service'

// routage de l'application

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Vehicule', component: VehiculesComponent },
  { path: 'Reservation', component: ReservationComponent,canActivate:[AuthGuard]  },
  { path: 'Contact', component: ContactComponent },
  { path: 'Propos', component: ProposComponent },
  { path: 'Disponibilite', component: DisponibiliteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard] },
  { path: 'mesreservations', component: MesreservComponent,canActivate:[AuthGuard] },
  { path: 'gestionreserv', component: GestionreservComponent,canActivate:[AuthGuard] },
  { path: 'gestionUtilisateur', component: GestionUtilisateurComponent,canActivate:[AuthGuard] },
  
 
]

@NgModule({
	//declarations des composants
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
    UserComponent,
    MesreservComponent,
    GestionreservComponent,
    GestionUtilisateurComponent
  ],
  //import des composants
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
  //fournisseurs d'accès aux différents services de l'application
  providers: [AuthService,UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
