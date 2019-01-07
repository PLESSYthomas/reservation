import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // baseUrl = 'http://localhost/api';
  // messages: message[];
  
  // constructor(private http: HttpClient) { }

  // getAll(): Observable<message[]> {
    // return this.http.get(`${this.baseUrl}/list`).pipe(
      // map((res) => {
        // this.messages = res['data'];
        // return this.messages;
    // }),
    // catchError(this.handleError));
  // }

  // store(message: message): Observable<message[]> {
    // return this.http.post(`${this.baseUrl}/store`, { data: message })
      // .pipe(map((res) => {
        // this.messages.push(res['data']);
        // return this.messages;
      // }),
      // catchError(this.handleError));
  // }

  // update(message: message): Observable<message[]> {
    // return this.http.put(`${this.baseUrl}/update`, { data: message })
      // .pipe(map((res) => {
        // const theMessage = this.messages.find((item) => {
          // return +item['id'] === +message['id'];
        // });
        // if (theMessage) {
          // theMessage['personne'] = message['personne'];
		  // theMessage['objet'] = message['objet'];
		  // theMessage['message'] = message['message'];
        // }
        // return this.messages;
      // }),
      // catchError(this.handleError));
  // }

  // delete(id: number): Observable<message[]> {
    // const params = new HttpParams()
      // .set('id', id.toString());

    // return this.http.delete(`${this.baseUrl}/delete`, { params: params })
      // .pipe(map(res => {
        // const filteredCars = this.messages.filter((message) => {
          // return +message['id'] !== +id;
        // });
        // return this.messages = filteredCars;
      // }),
      // catchError(this.handleError));
  // }

  // private handleError(error: HttpErrorResponse) {
    // console.log(error);

    // return an observable with a user friendly message
    // return throwError('Error! something went wrong.');
  // }
// }
  
}