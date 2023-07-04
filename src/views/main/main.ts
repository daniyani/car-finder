import { IView, MainState, Response, Filters } from "../../../types/app";
import { AbstractView } from "../../common/view";
import onChange from "on-change";
import queryString from "query-string";
import { Filters as FiltersComponent } from "../../components/filters/filters";
import { Header } from "../../components/header/header";

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

  renderHeader(): void {
    const header = new Header().render();
    this.app.prepend(header);
  }

  render(): void {
    const main = document.createElement("div");
    main.classList.add("main");
    main.append(new FiltersComponent(this.mainState).render());
    this.renderHeader();
    this.app.append(main);
  }
}
