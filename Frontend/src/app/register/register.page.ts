import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  vezeteknev : string = "";
  keresztnev : string = "";
  email : string = "";
  jelszo : string = "";
  jelszoUjra : string = "";
  tajszam : number;

  constructor() { }

  ngOnInit() {
  }

}
