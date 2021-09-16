import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-active-quote',
  templateUrl: './active-quote.component.html',
  styleUrls: ['./active-quote.component.css']
})
export class ActiveQuoteComponent implements OnInit {

  constructor( private httpservice: HttpClient) { }
  actives: any;

  ngOnInit(): void {
    this.httpservice.get('./assets/active.json'). subscribe(
      data => {
        this.actives = data as string[];
      },
      (err: HttpErrorResponse) =>{
        console.log(err.message);
      }
    );
  }

}
