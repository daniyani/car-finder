export abstract class DivComponent {
  protected el: HTMLElement;

  constructor() {
    this.el = document.createElement("div");
  }

  abstract render(): HTMLElement;
}
