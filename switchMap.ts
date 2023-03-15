import { Component, OnInit } from '@angular/core';
import { AsyncSubject, Observable, ReplaySubject, concat, merge,from, of, map, mergeMap, concatMap, switchMap, delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'y';


  getData(returnVal:any){
    return of(returnVal + ' is my friend').pipe(delay(5000))
  }
  ngOnInit(){

    let myArray=['darshil','suchit','kaushal'];

    from(myArray).pipe(switchMap(res=>this.getData(res))).subscribe(res=>{
      console.log(res);
      
      let myLi=document.createElement('li');
      myLi.innerText=res;
      document.getElementById('myUl')?.appendChild(myLi);
    })
  }
}

//switchMap only last value emit kari ne ape 