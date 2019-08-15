import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allhistory',
  templateUrl: './allhistory.component.html',
  styleUrls: ['./allhistory.component.css']
})
export class AllhistoryComponent implements OnInit {

  // constructor() { }
  mDataArray:any[] = [];
  constructor(private http:HttpClient) {
    http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(result =>{this.mDataArray = result;
  console.log(JSON.stringify(this.mDataArray));
  });
   }

  ngOnInit() {
  }

}
