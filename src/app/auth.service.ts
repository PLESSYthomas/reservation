import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetails(username,password) {
    /*
    return this.http.post('/api/auth.php', {
      username,password
    }).subscribe(data => {
      console.log(data," est le formulaire que l'on veut sur le serveur")
    })
    */
  }
}
