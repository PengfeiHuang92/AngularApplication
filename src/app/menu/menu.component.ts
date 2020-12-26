import { menuServices } from './../menu.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
   title =  'Hello Angular!';
   friedRice;
   constructor(menuS : menuServices){ //dependency injection
    //dependency injection: injecting or providing the dependencies of a class into the constructor
    //Pros: We donot need to manuly change the code if we dicide to add paramters to the menuServices services
     this.friedRice = menuS.getMenu();
   }
}
