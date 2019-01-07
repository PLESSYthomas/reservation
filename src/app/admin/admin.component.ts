import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private user: UserService) { }

	message = "Chargement..."

// permet de vérifier le statut de connexion
  ngOnInit() {
	  this.user.getSomeData().subscribe(data => {
		  this.message = data.message
		  if(!data.success){
			  localStorage.removeItem('loggedIn')
		    }

		})
	}
}
