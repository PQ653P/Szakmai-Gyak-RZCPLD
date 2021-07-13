import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { SignupPage } from '../src/app/home/signup/signup.html';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email : string = "";
  jelszo : string = "";
  log : string = "";
 
  
  constructor(public route: Router) {}

  register()
  {
    this.route.navigate(['/register']);
  }

  login(){
    if (this.email== "test@test.com" && this.jelszo == "password"){
      this.log = "Sikeres bejelentkezés!"
    }
    else this.log ="Ismeretlen felhasználó!"
  }
  
  

}
