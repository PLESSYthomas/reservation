import { Component, OnInit } from '@angular/core';

import { Car } from 'src/app/car';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
 // liste des réservations
 cars: Car[];
 // erreur
  error = '';
  //succés
  success = '';
  // contenu de la variable car étant une réservation
  //car = new Car('Destination','dateAller','dateRetour','objet','passagers',gps,'Voiture');
  car = new Car('','','','',0,null,'');

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
  }
  // permet d'obtenir les réservations
  getCars(): void {
    this.carService.getAll().subscribe(
      (res: Car[]) => {
        this.cars = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  // permet d'ajouter les réservations
  addCar(f) {
    this.resetErrors();

    this.carService.store(this.car)
      .subscribe(
        (res: Car[]) => {
          // mis a jour de la reservation
          this.cars = res;

          // informe l'utilisateur du succés de la création de la réservation
          this.success = 'Created successfully';

          // réinitialise le formulaire
          f.reset();
        },
        (err) => this.error = err
      );
  }
  //mise a jour de la réservation
  updateCar(dateAller, dateRetour,Destination,objet,Passagers,gps,voiture, id) {
    this.resetErrors();

    this.carService.update({ dateAller: dateAller.value, dateRetour: dateRetour.value,Destination: Destination.value,objet: objet.value,Passagers: Passagers.value,gps: gps.value,voiture: voiture.value, id: +id })
      .subscribe(
        (res) => {
          this.cars    = res;
          this.success = 'Updated successfully';
        },
        (err) => this.error = err
      );
  }
// suppression de la réservation
  deleteCar(id) {
    this.resetErrors();

    this.carService.delete(+id)
      .subscribe(
        (res: Car[]) => {
          this.cars = res;
          this.success = 'Deleted successfully';
        },
        (err) => this.error = err
      );
  }
// réinitialisation des erreurs
  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}

