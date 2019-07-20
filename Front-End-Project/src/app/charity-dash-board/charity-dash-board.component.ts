import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import {Rating } from '../rating';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-charity-dash-board',
  templateUrl: './charity-dash-board.component.html',
  styleUrls: ['./charity-dash-board.component.css']
})
export class CharityDashBoardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service : DonationService) { }

    charity : any;
    username : string;
    foodStatus : any;
    charityLogs : any[];
    abcd : any;
    locationstring:string;
    rating = new Rating;
    

  ngOnInit() {

    this.username = sessionStorage.getItem('username');

    console.log(this.username)
    this.service.fetchCharityProfile(this.username).subscribe(data=>{
      console.log(data)
        this.charity=data;  
         });

      
    
    this.service.fetchCharityLogs(this.username).subscribe(data=>{
      console.log(data)
      this.charityLogs=data; 
        });
      }
    fetchStatus(){
      this.service.fetchCharityFoodStatus(this.username).subscribe(data=>{
        this.foodStatus=data;})
    }

    onRate(ratedValue : number, logId : number){
      this.rating.username = this.username;
      this.rating.logId = logId;
      this.rating.rating = ratedValue;
      this.service.onRate(this.rating).subscribe(data=>{
        console.log(data)})
    }


}
