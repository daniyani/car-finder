import { AppState, IView } from "../../../types/app";
import { AbstractView } from "../../common/view";

export class MainView extends AbstractView implements IView {
  protected appState: AppState;

  constructor(state: AppState) {
    super();
    this.appState = state;
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
