import { Menu } from './../../../constants/menu';
import { OptionMenu } from './../../../models/option-menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isMenuBurger: Boolean= false;
 
  private menu: Menu = new Menu();
  public listOptionMenu: Array<OptionMenu>;

  constructor() {
    this.listOptionMenu= this.menu.optionMenu;
  }

  ngOnInit(): void {
  }

  clickMenuMobile(): void {
   this.isMenuBurger= this.isMenuBurger ? false: true;
  }
}
