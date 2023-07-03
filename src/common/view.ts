export class AbstractView {
  public app: HTMLElement;

  constructor() {
    this.app = document.getElementById("root") as HTMLElement;
  }

  setTitle(title: string) {
    document.title = title;
  }

  render() {
    return;
  }

  destroy() {
    return;
  }
}
