import { ListData } from "../../../types/app";
import { DivComponent } from "../../common/divComponent";
import { Card } from "../card/card";

export class CardList extends DivComponent {
  constructor(protected data: ListData) {
    super();
    this.data = data;
  }

  render() {
    if (this.data.isLoading) {
      this.el.innerHTML = "<div class='cardList-message'>Please wait...</div>";

      return this.el;
    }

    if (!this.data.list.length) {
      this.el.innerHTML = "<div class='cardList-message'>Not found</div>";
      return this.el;
    }

    this.el.classList.add("card-list");

    for (const card of this.data.list) {
      this.el.append(new Card(card).render());
    }
    return this.el;
  }
}
