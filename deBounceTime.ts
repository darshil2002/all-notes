import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {
 
  map,
  fromEvent,
  debounceTime,
} from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements AfterViewInit {

  @ViewChild('searchedValue') searchedValue!: ElementRef;

  constructor(){}
  Data: any;
  ngAfterViewInit(): void {
    const searchTerm=fromEvent<any>(this.searchedValue.nativeElement, 'keyup')

    searchTerm.pipe(map(res=>res.target.value),debounceTime(1000),distinctUntilChanged()).subscribe(res=>{
      this.Data=res;
      console.log(res);
    })
  }

}

// html 


// <input type="text" name="searchedValue" id="searchedValue" #searchedValue placeholder="search here...">
// <br><br>
// <span>your vale is :<span>{{this.Data}}</span></span>
//native Element nu dhyan rakho | 'keyup' | debounce time ma only time 
