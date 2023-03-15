import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'y';
  ngOnInit(){
    const myMsg$=new ReplaySubject(2);
    myMsg$.next('one')
    myMsg$.next('two')
    myMsg$.next('three')
    myMsg$.next('four')
    myMsg$.subscribe(msg=>console.log(`our value is ${msg}`))
    myMsg$.next('five')
    myMsg$.next('six')
    myMsg$.next('seven')
    myMsg$.subscribe(msg=>console.log(`my new value is...${msg}`))

  }
// jem jem navu avtu jay em em em update thai jay and last two 
// value j output ma batave

// update thai ne 
// ------

// if navo person subscribe kare to ene e direct updated value 
// na 2 point ne j batave 
}
