export interface IView {
  render(): void;
  destroy(): void;
}

enum FuelType {
  gas = "gas",
  diesel = "diesel",
  electricity = "electricity",
}

enum Transmission {
  a = "a",
  m = "m",
}

enum Drive {
  fwd = "fwd",
  rwd = "rwd",
  awd = "awd",
  "4wd" = "4wd",
}

export interface AppState {
  country: string;
  make: string;
  model: string;
  fuel_type: FuelType | null;
}

interface Response {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: Drive;
  fuel_type: FuelType;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: Transmission;
  year: number;
}
export interface MainState {
  list: Array<Response>;
  isLoading: boolean;
}
