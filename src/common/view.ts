export abstract class AbstractView {
  protected app: HTMLElement;

  constructor() {
    this.app = document.getElementById("root") as HTMLElement;
  }

  setTitle(title: string) {
    document.title = title;
  }

  abstract destroy(): void;
  abstract render(): void;
}
