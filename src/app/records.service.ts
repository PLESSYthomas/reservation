import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }
  getData() {
    return [
      {
        name: 'Mehul',
        online: true
      },
      {
        name: 'ABC',
        online: true
      },
      {
        name: 'XYZ',
        online: true
      },
      {
        name: 'ABC',
        online: false
      },
      {
        name: 'XYZ',
        online: true
      },

    ]
  }
}
