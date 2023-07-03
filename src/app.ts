import { IView } from "../types/app";
import { MainView } from "./views/main/main";

class App {
  private currentView: IView;
  private routes = [{ path: "", view: MainView }];

  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.route();
  }

  route(): void {
    if (this.currentView) {
      this.currentView.destroy();
    }

    const view = this.routes.find((r) => r.path === location.hash);

    if (this.isView(view)) {
      this.currentView = new view.view();
    }

    this.currentView.render();
  }

  isView(view: object | undefined): view is object {
    return typeof view === "object";
  }
}

new App();
