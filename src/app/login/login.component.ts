import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, 
              private router: Router) { }

  ngOnInit() {
  }
// permet de sélectionner le mdp et le nom d'utilisateur
  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

// Une fois identifié, on est redirigé vers la page admin si on est l'admin
    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
	// permet d'afficher dans la console le mdp et nom d'utilisateur
    console.log(username, password)
  }

}
