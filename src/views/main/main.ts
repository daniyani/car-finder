import { IView, MainState, Response, Filters } from "../../../types/app";
import { AbstractView } from "../../common/view";
import onChange from "on-change";
import queryString from "query-string";

export class MainView extends AbstractView implements IView {
  protected mainState: MainState = {
    list: [],
    isLoading: false,
    filters: {
      country: "",
      make: "",
      model: "",
      fuel_type: "",
    },
  };

  constructor() {
    super();
    this.mainState = onChange(this.mainState, this.stateHook.bind(this));
  }

  async loadData(filters: Filters): Promise<Array<Response>> {
    const query = queryString.stringify(filters);
    const response = await fetch(`https://api.api-ninjas.com/v1/cars?${query}`);
    return response.json();
  }

  async stateHook(path: string) {
    if (path === "filters") {
      this.mainState.isLoading = true;
      this.render();
      const data = await this.loadData(this.mainState.filters);
      this.mainState.isLoading = true;
      this.mainState.list = data;
      this.render();
    }
  }

  destroy(): void {
    console.log("destroy");
  }

  render(): void {
    const main = document.createElement("div");
    main.classList.add("main");
    main.innerHTML = "Main";
    this.app.append(main);
  }
}
