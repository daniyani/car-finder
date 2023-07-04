import { MainState } from "../../../types/app";
import { DivComponent } from "../../common/divComponent";
import "./card.css";

export class Card extends DivComponent {
  constructor(protected mainState: MainState) {
    super();
    this.mainState = mainState;
  }

  render() {
    this.el.classList.add("card");

    return this.el;
  }
}
