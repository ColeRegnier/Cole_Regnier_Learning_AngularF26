// seperate countryAPI interface so i can convert it into the country interface data so i dont have to rewrite my website
// data types are the exact same because i did my research and am goated but the structure is too different so i will have to map it
export interface CountryAPI {
  data:{
    objects: {
      names: {common: string};
      population : number;
      classification : {sovereign:boolean}
      borders?: string[];
    }[];
  };
}
