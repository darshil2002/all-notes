import { Component, OnInit } from '@angular/core';
import { AsyncSubject, Observable, ReplaySubject, concat, merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'y';
  ngOnInit(){
   
   let msgOne$=new Observable((x)=>{
    x.next(1)
    x.next(2)
    x.next(3)
    setTimeout(() => {
      x.next(4)
      x.complete();
    }, 3000);
   })
   let msgTwo$= new Observable((x)=>{
    x.next('a')
    x.next('b')
    x.next('c')
    x.next('d')
   })
  //  concat(msgOne$,msgTwo$).subscribe(x=>{
  //   console.log(x);
  //  })
   merge(msgOne$,msgTwo$).subscribe(x=>{
    console.log(x);
   })
  }

  // concat e end thavano wait kare(good boy)
  // jyare merge je male ene j print karai ape(not a good boy)


}
