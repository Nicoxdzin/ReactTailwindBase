// src/components/VeiculoTable.tsx
import React, { useEffect, useState } from 'react';
import { getVeiculosByMarca } from '../api/fipe/veiculos';
import { Veiculo } from '../interfaces/veiculo';


interface VeiculoTableProps {
  marcaCodigo: number;
}

const VeiculoTable: React.FC<VeiculoTableProps> = ({ marcaCodigo }) => {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const data = await getVeiculosByMarca(marcaCodigo);
        setVeiculos(data);
      } catch (err) {
        setError('Erro ao carregar os veículos');
      } finally {
        setLoading(false);
      }
    };

    fetchVeiculos();
  }, [marcaCodigo]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        {veiculos.map(veiculo => (
          <tr key={veiculo.codigo}>
            <td>{veiculo.codigo}</td>
            <td>{veiculo.nome}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VeiculoTable;