import { Marca } from '../../interfaces/marca';
import axiosInstance from '../../services/axiosInstance';

export const getMarcas = async (): Promise<Marca[]> => {
  const response = await axiosInstance.get<Marca[]>('/carros/marcas');
  return response.data;
};