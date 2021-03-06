import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  isNavbarCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  hideNav(){
    if(!this.isNavbarCollapsed)
      return this.isNavbarCollapsed  = !this.isNavbarCollapsed;
    return null;
  }
}
