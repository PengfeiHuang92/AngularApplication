import { menuServices } from './../menu.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent  {
   title = "";
   menu;
   isActive = false; //used for event handling 
   email = "" ; //used for two-way binding
   viewMode ="map"; 
   items = ["Item1","Item2","Item3"];
   constructor(menuS : menuServices){ //dependency injection
    //dependency injection: injecting or providing the dependencies of a class into the constructor
    //Pros: We donot need to manuly change the code if we dicide to add paramters to the menuServices services
     this.menu = menuS.getMenu();
   }
 

   //Event handling 
   enterClicked(value:string){console.log(value)};

   enterClickedTwoWayBinding(){console.log(this.email);}

   onChange(){
    //  if(this.isActive == false) {this.isActive = true;}
    //  else{
    //   this.isActive=false;
    //  } 
    //All code above can be replaced by one line code
    this.isActive = !this.isActive;
   }
   addItem(){
    this.items.push("item " + (this.items.length+1));
   }
   deleteItem(item:string){
    let index = this.items.indexOf(item);
    this.items.splice(index,1);
   }
 
   
  
}
