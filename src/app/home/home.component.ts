import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title="Hola Mundo Home";
  modificado=false;
  
  constructor() { }

  ngOnInit(): void {
  }

  cambiarTitle()
  {
    this.title="Hola Mundo Modificado";
    this.modificado=true;
  }

}
