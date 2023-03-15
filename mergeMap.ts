import { Component, OnInit } from '@angular/core';
import { AsyncSubject, Observable, ReplaySubject, concat, merge,from, of, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'y';


  getData(returnVal:any){
    return of(returnVal + ' is my friend')
  }
  ngOnInit(){

    let myArray=['darshil','suchit','kaushal'];

    // from(myArray).pipe(map(x=>this.getData(x))).subscribe(y=>y.subscribe(z=>{
    //   console.log(z);
    // })
    // )
    from(myArray).pipe(mergeMap(res=>this.getData(res))).subscribe(res=>{
      //ahiya concatMap use kari sakay
      console.log(res);
      
      let myLi=document.createElement('li');
      myLi.innerText=res;
      document.getElementById('myUl')?.appendChild(myLi);
    })
  }
}

// merge map thi if same thi ans in observable avto hoy to ene normal rite batai sakay
