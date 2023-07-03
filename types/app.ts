export interface IView {
  render(): void;
  destroy(): void;
}

export interface AppState {
  country: string;
  make: string;
  model: string;
  fuel_type: string;
}
