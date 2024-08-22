import { Marca } from "./marca";
import { Veiculo } from "./veiculo";


export interface MarcaVeiculo {
    marca: Marca;
    veiculos: Veiculo[];
  }