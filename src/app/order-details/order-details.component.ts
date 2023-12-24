import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  orderDetails: any;
  orderId!:number;
  constructor(private http : HttpClient,private router:Router, private  route:ActivatedRoute) {
    this.orderId = route.snapshot.params["orderId"];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/order-service/fullOrder/"+this.orderId)
      .subscribe({
        next: (data: any) => {
          console.log('API Response:', data);
          this.orderDetails = data;
        },
      });
  }

}