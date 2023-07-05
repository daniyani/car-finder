import { IView, MainState, Response, Filters } from "../../../types/app";
import { AbstractView } from "../../common/view";
import onChange from "on-change";
import queryString from "query-string";
import { Filters as FiltersComponent } from "../../components/filters/filters";
import { Header } from "../../components/header/header";
import { CardList } from "../../components/cardList/cardList";

export class MainView extends AbstractView implements IView {
  protected mainState: MainState = {
    list: [],
    isLoading: false,
    filters: {
      year: "",
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
    const query = queryString.stringify(filters, { skipEmptyString: true });

    const response = await fetch(
      `https://api.api-ninjas.com/v1/cars?${query}`,
      {
        headers: { "X-Api-Key": "Il9CQNdHGwny2yj7Eet/7A==uSpy1OhBOUVoDjK1" },
      }
    );

    return response.json();
  }

  async stateHook(path: string) {
    if (path === "filters") {
      this.mainState.isLoading = true;
      this.render();
      const data = await this.loadData(this.mainState.filters);
      this.mainState.isLoading = false;
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
    this.app.innerHTML = "";
    main.append(new FiltersComponent(this.mainState).render());
    main.append(
      new CardList({
        list: this.mainState.list,
        isLoading: this.mainState.isLoading,
      }).render()
    );
    this.renderHeader();
    this.app.append(main);
  }
}
