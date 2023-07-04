import { MainState } from "../../../types/app";
import { DivComponent } from "../../common/divComponent";

export class Filters extends DivComponent {
  constructor(protected mainState: MainState) {
    super();
    this.mainState = mainState;
  }

  render() {
    this.el.classList.add("filters-container");
    this.el.innerHTML = `
    <div class="filter-elems">
            <input class="filter-input" name="country" placeholder="Country" />
            <input class="filter-input" name="make" placeholder="Make" />
            <input class="filter-input" name="model" placeholder="Model" />
            <input class="filter-input" name="fuel_type" placeholder="Fuel type" />
    </div>
        <button class="filter-button">Find</button>
    `;
    return this.el;
  }
}
