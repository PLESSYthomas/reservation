import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.css']
})
export class VehiculesComponent implements OnInit {

 public show:boolean = false;
  public buttonName:any = 'Show';

  ngOnInit () { 

}
}
