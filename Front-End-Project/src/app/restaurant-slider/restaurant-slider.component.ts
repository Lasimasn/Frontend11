import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-restaurant-slider',
  templateUrl: './restaurant-slider.component.html',
  styleUrls: ['./restaurant-slider.component.css']
})
export class RestaurantSliderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public allRestaurants: any;

  public resturantSlider1 = [];
  public resturantSlider2 = [];
  public resturantSlider3 = [];
  public resturantSlider4 = [];
  public resturantSlider5 = [];

  public restImgPath: string;
  public restMenu_url: string;

  ngOnInit() {
    this.getAllRestaurants().subscribe((data: any) => {
      this.allRestaurants = data.restaurants;
      var count = 0;
      var i = 0;
      this.allRestaurants.forEach(element => {

        // console.log(element);

        if (count >= 0 && count <= 3) {

          this.resturantSlider1[i] = element.restaurant;

        } else if (count > 3 && count <= 7) {

          this.resturantSlider2[i] = element.restaurant;

        } else if (count > 7 && count <= 11) {

          this.resturantSlider3[i] = element.restaurant;

        } else if (count > 11 && count < 15) {

          this.resturantSlider4[i] = element.restaurant;

        } else if (count > 15 && count < 19) {

          this.resturantSlider5[i] = element.restaurant;

        }
        i++;
        count++;

        if (i > 3) {
          i = 0;
        }
      });
    });

  }

  openView(restaurant) {
    document.getElementById("viewRestaurant").style.display = "block";
    this.restImgPath = restaurant.thumb;
    this.restMenu_url = restaurant.menu_url;
    document.getElementById("restName").innerHTML = restaurant.name;
    document.getElementById("restAddress").innerHTML = restaurant.location.address;
    document.getElementById("restCuisines").innerHTML = restaurant.cuisines;

  }

  closeView() {
    document.getElementById("viewRestaurant").style.display = "none";
  }

  getAllRestaurants() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'user-key': '30576d9b42f4f655ac73d7f1dcffdca9'
      })
    };
    return this.http.get('https://developers.zomato.com/api/v2.1/search', httpOptions)
  }

}