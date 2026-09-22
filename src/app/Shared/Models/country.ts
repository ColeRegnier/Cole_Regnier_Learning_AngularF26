export interface Country {
  name : string;
  population: string | number;
  independent: boolean;
  borders?: string[]; // list of bordering countries
}
