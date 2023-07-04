import { MainState } from "../../../types/app";
import { DivComponent } from "../../common/divComponent";

export class Filters extends DivComponent {
  constructor(protected mainState: MainState) {
    super();
    this.mainState = mainState;
  }

  search(): void {
    const country = (
      this.el.querySelector("input[name=country]") as HTMLInputElement
    ).value;
    const make = (this.el.querySelector("input[name=make]") as HTMLInputElement)
      .value;
    const model = (
      this.el.querySelector("input[name=model]") as HTMLInputElement
    ).value;
    const fuel_type = (
      this.el.querySelector("input[name=fuel_type]") as HTMLInputElement
    ).value;

    this.mainState.filters = {
      ...this.mainState.filters,
      country,
      make,
      model,
      fuel_type,
    };
  }

  render() {
    const { filters } = this.mainState;
    this.el.classList.add("filters-container");
    this.el.innerHTML = `
    <div class="filter-elems">
            <input class="filter-input" type="text" name="country" placeholder="Country" value="${
              filters.country || ""
            }"/>
            <input class="filter-input" type="text" name="make" placeholder="Make" value="${
              filters.make || ""
            }"/>
            <input class="filter-input" type="text" name="model" placeholder="Model" value="${
              filters.model || ""
            }"/>
            <input class="filter-input" type="text" name="fuel_type" placeholder="Fuel type" value="${
              filters.fuel_type || ""
            }"/>
    </div>
        <button class="filter-button">Find</button>
    `;

    this.el
      .querySelector(".filter-button")!
      .addEventListener("click", this.search.bind(this));

    return this.el;
  }
}
