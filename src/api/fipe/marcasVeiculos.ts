// src/api/fipe/marcasVeiculos.ts
import { MarcaVeiculo } from '../../interfaces/marca-veiculo';
import axiosInstance from '../../services/axiosInstance';

export const getMarcasComVeiculos = async (): Promise<MarcaVeiculo[]> => {
  const response = await axiosInstance.get<MarcaVeiculo[]>('/carros/marcasVeiculos');
  return response.data;
};