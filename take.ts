import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  Subscription,
  tap,
  map,
  interval,
  take,
} from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {

  myObj = [
    { name: 'darshil', gen: 'male', id: 1 },
    { name: 'kaushal', gen: 'male', id: 2 },
    { name: 'rahul', gen: 'male', id: 3 },
    { name: 'isha', gen: 'girl', id: 4 },
    { name: 'mouse', gen: 'male', id: 5 },
  ];
  myArray=['darshil','suchit','kaushal','rajesh','raju','vikas']
 
  mySub: Subscription | undefined;
  
  ngOnInit() {
    let myTime=interval(1000);
    // take is here 
    this.mySub = myTime.pipe(take(4),map(res=>this.myArray[res])).subscribe(res=>{
      console.log(res);
      let myLi=document.createElement('li')
      myLi.innerText=res;
      document.getElementById('myUl')?.appendChild(myLi);
    })
  }
}
// html 
// <ul id="myUl" #myUl>
//     <!-- <li></li> -->
// </ul>