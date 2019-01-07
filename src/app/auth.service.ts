import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }
// modifie le statue de l'utilisateur
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }
//retourne le statut de l'utilisateur
  get isLoggedIn() {
    return this.loggedInStatus
  }
// permet d'obtenir les détails sur un utilisateur
  getUserDetails(username, password) {
    return this.http.post<myData>('http://localhost/api/auth.php', {
      username,
      password
    })
  }

}
