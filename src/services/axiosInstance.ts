// src/services/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1',  // URL base para todas as requisições
  timeout: 10000,  // Tempo limite para cada requisição
  headers: { 'Content-Type': 'application/json' },  // Cabeçalhos padrão
});

export default axiosInstance;