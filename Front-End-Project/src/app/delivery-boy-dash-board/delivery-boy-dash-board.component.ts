import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationService } from '../donation.service';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-delivery-boy-dash-board',
  templateUrl: './delivery-boy-dash-board.component.html',
  styleUrls: ['./delivery-boy-dash-board.component.css']
})
export class DeliveryBoyDashBoardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DonationService,
    private sanitizer: DomSanitizer
  ) { }

  deliveryBoy: any[]
  username: string
  deliveryRoute: any
  deliveryBoyLogs: any
  location;
  url = "http://maps.google.com/maps?q=";
  postfix = "&z=15&output=embed";
  cords : any[][]
  restaurants : any;

  ngOnInit() {
    this.username = sessionStorage.getItem('username');

    console.log(this.username)
    this.service.fetchDeliveryBoyProfile(this.username).subscribe(data => {
      console.log(data)
      this.deliveryBoy = data;
    })

    console.log(this.username)
    this.service.fetchDeliveryBoyLogs(this.username).subscribe(data => {
      console.log(data)
      this.deliveryBoyLogs = data;
      console.log(this.deliveryBoyLogs)
      this.deliveryBoyLogs.logs = this.deliveryBoyLogs.logs.map(e => {
        e.restaurants.map(i => {
          i.location = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + i.location + this.postfix)
          return i
        })
        e.charities.map(j => {
          j.location = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + j.location + this.postfix)
          return j
        })
        return e
      })
      console.log(this.deliveryBoyLogs);
    })

    this.location = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.cords + this.postfix)
  }

  fetchRoute() {
    console.log(this.username)
    this.service.fetchDeliveryBoyRoute(this.username).subscribe(data => {
      console.log(data)
      this.deliveryRoute = data;
    })
  }

  onPicked(restaurantUsername: string) {
    this.service.saveRestaurantLogOnPicked(restaurantUsername).subscribe(data => {
      console.log(data)
    })
  }

  onDelivered(charityUsername: string) {
    this.service.saveCharityLogOnDelivered(charityUsername).subscribe(data => {
      console.log(data)
    })
  }

  routeMap()
  {
    this.router.navigateByUrl('/RouteMap');
  }
}
