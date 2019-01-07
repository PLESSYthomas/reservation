import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})

// permet les différentes interractions de l'application avec la base de données concernant les réservations

export class CarService {
  baseUrl = 'http://localhost/api';
  cars: Car[];

constructor(private http: HttpClient) { }

// permet d'obtenir la liste des réservations

  getAll(): Observable<Car[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.cars = res['data'];
        return this.cars;
    }),
    catchError(this.handleError));
  }

// permet de sauvegarder les réservations

  store(car: Car): Observable<Car[]> {
    return this.http.post(`${this.baseUrl}/store`, { data: car })
      .pipe(map((res) => {
        this.cars.push(res['data']);
        return this.cars;
      }),
      catchError(this.handleError));
  }

// permet de mettre à jour la réservation

  update(car: Car): Observable<Car[]> {
    return this.http.put(`${this.baseUrl}/update`, { data: car })
      .pipe(map((res) => {
        const theCar = this.cars.find((item) => {
          return +item['id'] === +car['id'];
        });
        if (theCar) {
          theCar['dateAller'] = car['dateAller'];
          theCar['dateRetour'] = car['dateRetour'];
		  theCar['Destination'] = car['Destination'];
		  theCar['objet'] = car['objet'];
		  theCar['Passagers'] = car['Passagers'];
		  theCar['gps'] = car['gps'];
		  theCar['voiture'] = car['voiture'];
        }
        return this.cars;
      }),
      catchError(this.handleError));
  }

// permet de supprimer la réservation

  delete(id: number): Observable<Car[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete`, { params: params })
      .pipe(map(res => {
        const filteredCars = this.cars.filter((car) => {
          return +car['id'] !== +id;
        });
        return this.cars = filteredCars;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Grossière erreur');
  }
}