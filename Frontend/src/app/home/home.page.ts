import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  felhasznaloNev : string = "";
  jelszo : string = "";
  log : string = "";
  constructor() {}
  login(){
    if (this.felhasznaloNev== "admin" && this.jelszo == "password"){
      this.log = "Sikeres bejelentkezés!"
    }
    else this.log ="Ismeretlen felhasználó!"
  }

}
