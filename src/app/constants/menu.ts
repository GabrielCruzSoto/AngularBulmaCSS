import { OptionMenu } from './../models/option-menu';
export class Menu {
    optionMenu: Array<OptionMenu>
    constructor(){
        this.optionMenu=[
            {
                id: 1,
                name: "Home",
                classCSS: "navbar-item"
            },
            {
                id: 2,
                name: "Contact",
                classCSS: "navbar-item"
            },
            {
                id: 1,
                name: "About",
                classCSS: "navbar-item"
            },
        ]
    }
}
