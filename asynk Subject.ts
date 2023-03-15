import { Component, OnInit } from '@angular/core';
import { AsyncSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'y';
  ngOnInit(){
    const myMsg$=new AsyncSubject();
    myMsg$.next('one')
    myMsg$.next('two')
    myMsg$.next('three')
    myMsg$.complete()
    myMsg$.next('four')
    myMsg$.subscribe(msg=>console.log(`${msg}`))
    myMsg$.next('five')
    myMsg$.next('six')
    myMsg$.next('seven')
   

  }
// asynk subject jya sudh complete use na karo tya sudhi
// work na kare 

// once complete thai jay than sauthi updated value 
// output ma ape 
}