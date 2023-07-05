import { Response } from "../../../types/app";
import { DivComponent } from "../../common/divComponent";

export class Card extends DivComponent {
  constructor(protected item: Response) {
    super();
    this.item = item;
  }

  render() {
    this.el.classList.add("card");
    this.el.innerHTML = `
      <div class="card-inner">
        <div class="year">Year: ${this.item.year}</div>
        <div class="make">Make: ${this.item.make}</div>
        <div class="model">Model: ${this.item.model}</div>
        <div class="fuel_type">Fuel type: ${this.item.fuel_type}</div>
      </div>
    `;
    return this.el;
  }
}
