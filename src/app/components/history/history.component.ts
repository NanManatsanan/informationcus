import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {


  // constructor() {
    
  //  }

   mDataArray:any[] = [];
  constructor(private http:HttpClient) {
    http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(result =>{this.mDataArray = result;
  console.log(JSON.stringify(this.mDataArray));
  });
   }

  ngOnInit() {
  }
  onClickNext(){
   
  }
}
