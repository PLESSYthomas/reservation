import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car';
import { CarService } from 'src/app/car.service';
@Component({
  selector: 'app-mesreserv',
  templateUrl: './mesreserv.component.html',
  styleUrls: ['./mesreserv.component.css']
})
export class MesreservComponent implements OnInit {

 cars: Car[];
  error = '';
  success = '';

  car = new Car('','','','',0,null,'');

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
  }

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

  addCar(f) {
    this.resetErrors();

    this.carService.store(this.car)
      .subscribe(
        (res: Car[]) => {
          // Update the list of cars
          this.cars = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          f.reset();
        },
        (err) => this.error = err
      );
  }

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

  private resetErrors(){
    this.success = '';
    this.error   = '';
  }

}


