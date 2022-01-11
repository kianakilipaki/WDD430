import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    p {
      color:red;
    }
    h1 {
      color:blue;
    }`
  ],
  styleUrls: ['./servers.component.css'] 
  
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
