// src/api/fipe/veiculos.ts
import { Veiculo } from '../../interfaces/veiculo';
import axiosInstance from '../../services/axiosInstance';

export const getVeiculosByMarca = async (marcaCodigo: number): Promise<Veiculo[]> => {
  const response = await axiosInstance.get<Veiculo[]>(`/carros/marcas/${marcaCodigo}/modelos`);
  return response.data;
};