import { MainState } from "../../../types/app";
import { DivComponent } from "../../common/divComponent";

export class Header extends DivComponent {
  constructor() {
    super();
  }

  render() {
    this.el.classList.add("header");
    this.el.innerHTML = `
    <img src="/static/car-logo.svg" class="header-logo"/>
    `;
    return this.el;
  }
}
