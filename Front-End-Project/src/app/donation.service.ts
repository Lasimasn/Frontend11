import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Rating} from './rating';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  saveRestaurant(restaurant){
    var saveRestaurantUrl= "http://localhost:8080/api/v1/restaurant-profile/";
    console.log("Saving Restaurant", restaurant);
    return this.http.post<any>(saveRestaurantUrl,restaurant);
  }
 
  saveCharity(charity){
   var saveCharityUrl= "http://localhost:8080/api/v1/charity-profile/";
   console.log("Saving Charity", charity);
   return this.http.post<any>(saveCharityUrl,charity);
 }
 
 saveDeliveryBoy(deliveryBoy){
   var saveDeliveryBoyUrl= "http://localhost:8080/api/v1/deliveryBoy-profile/";
   console.log("Saving DeliveryBoy", deliveryBoy);
   return this.http.post<any>(saveDeliveryBoyUrl,deliveryBoy);
  }
 
  updateRestaurantProfile(restaurant){
   var updateRestaurantUrl= "http://localhost:8080/api/v1/restaurant-profile/";
   console.log("Updating Restaurant Profile", restaurant);
   return this.http.put<any>(updateRestaurantUrl,restaurant);
 }
 
 updateCharityProfile(charity){
   var updateCharityUrl= "http://localhost:8080/api/v1/charity-profile/";
   console.log("Updating Charity Profile", charity);
   return this.http.put<any>(updateCharityUrl,charity);
 }
 
 updateDeliveryboyProfile(deliveryBoy){
   var updateDeliveryBoyUrl= "http://localhost:8080/api/v1/deliveryBoy-profile/";
   console.log("Updating DeliveryBoy Profile", deliveryBoy);
   return this.http.put<any>(updateDeliveryBoyUrl,deliveryBoy);
 }
  
  fetchRestaurantProfile(username){
   var url= `http://localhost:8080/api/v1/restaurant-profile/?username=${username}`;
   console.log("Fetching Restaurant With Username : ", username);
   return this.http.get<any>(url);
  }
  
  fetchCharityProfile(username){
   var url= `http://localhost:8080/api/v1/charity-profile/?username=${username}`;
   console.log("Fetching Charity With Username : ", username);
   return this.http.get<any>(url);
  }
  
  fetchDeliveryBoyProfile(username){
   var url= `http://localhost:8080/api/v1/deliveryBoy-profile/?username=${username}`;
   console.log("Fetching Delivery Boy With Username : ", username);
   return this.http.get<any>(url);
  }
  
  updateRestaurantActivity(details){
  
   var url= "http://localhost:8050/updateRestaurantDetails";
   // var header = new HttpHeaders();
   // header.append("Content-Type","application/json");
   console.log("Updating Restaurant Details With Username : ", details.restaurantId , " And Food Availability : " , details.foodAvailability);
   return this.http.put<any>(url,details);
  }
  
  fetchRestaurantLogs(username){
    var url= `http://localhost:8090/api/v1/restaurant-logs/?username=${username}`;
    console.log("Fetching Restaurant's Logs With Username : ", username);
    return this.http.get<any>(url);
   }
  
   fetchRestaurantFoodStatus(username){
    var url= `http://localhost:8090/api/v1/restaurant-status/?username=${username}`;
    console.log("Fetching Restaurant's Food Status With Username : ", username);
    return this.http.get<any>(url);
   }
  
  fetchCharityLogs(username){
    var url= `http://localhost:8070/api/v1/charity-logs/?username=${username}`;
    console.log("Fetching Charity's Logs With Username : ", username);
    return this.http.get<any>(url);
   }
  
  fetchCharityFoodStatus(username){
   var url= `http://localhost:8070/api/v1/charity-status/?username=${username}`;
   console.log("Fetching Charity's Food Status With Username : ", username);
   return this.http.get<any>(url);
  }
  
  fetchDeliveryBoyLogs(username){
    var url= `http://localhost:8040/api/v1/deliveryBoy-logs/?username=${username}`;
    console.log("Fetching Delivery Boy's Route Status With Username : ", username);
    return this.http.get<any>(url);
   }
  
  fetchDeliveryBoyRoute(username){
    var url= `http://localhost:8040/api/v1/deliveryBoy-status/?username=${username}`;
    console.log("Fetching Delivery Boy's Route Status With Username : ", username);
    return this.http.get<any>(url);
   }
 
   saveRestaurantLogOnPicked(username){
     var url= `http://localhost:8090/api/v1/restaurant-logs/`;
     console.log("Saving Restaurant Log With Username : ", username);
     return this.http.post<any>(url,username);
    }
 
   saveCharityLogOnDelivered(username){
     var url= `http://localhost:8070/api/v1/charity-logs/`;
     console.log("Saving Charity Log With Username : ", username);
     return this.http.post<any>(url,username);
    }
   
   onRate(rating : Rating){
     var url= `http://localhost:8070/api/v1/charity-rating/`;
     console.log("Saving Charity Log With Username : ", rating);
     return this.http.post<any>(url,rating);
    }
 }