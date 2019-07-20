import { Component, OnInit } from '@angular/core';
import {DonationService} from '../donation.service';
@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit {

  constructor(
    private service : DonationService
  ) { }

  username : string
  deliveryRoute : any

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    console.log(this.username)
    this.service.fetchDeliveryBoyRoute(this.username).subscribe(data=>{
      console.log(data)
      this.deliveryRoute=data;})
  }

}
