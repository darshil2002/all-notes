<p>hello</p>
<div class="col-md-3 pr-4">
  <label for="name">select your name:</label>
  <br>
  <br>
  <select name="select name" id="" class="form-control" #name>
    <option *ngFor="let i of nameSource" value="{{i}}">{{i}}</option>
  </select>
  <br>
  <br>
  <select name="select color" id="" class="form-control" #color>
    <option *ngFor="let i of colorSource" value="{{i}}">{{i}}</option>
  </select>
</div>

// .. . . . . . .. . . .. .. . .. ...  . .. ... 

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'y';
  nameSource=['darshil','om','ayush','kaushal','suchit'];
  colorSource=['red','green','blue','black','pink'];

  @ViewChild('name') name:ElementRef | undefined;
  @ViewChild('color') color:ElementRef | undefined;

  ngAfterViewInit(){

    const name$=fromEvent<any>(this.name?.nativeElement ,'change').pipe(map(y=>y.target.value))
    const color$=fromEvent<any>(this.color?.nativeElement ,'change').pipe(map(y=>y.target.value))

    combineLatest(name$,color$).subscribe(([names,colors])=>{
      console.log(names,colors)
    })
  }
}
