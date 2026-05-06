import { TV_ENDPOINT } from '@/core';
import { useTmdb } from '@/hooks';
import { useParams } from 'react-router-dom';

export const SeasonsView = () => {
  const { id } = useParams();
  const { data } = useTmdb<any>(`${TV_ENDPOINT}/${id}`, {}, [id]);

  if (!data) return <p >Loading seasons...</p>;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold text-yellow-400">Seasons</h2>

      {data.seasons.map((season: any) => (
        <div key={season.id} className="rounded-xl bg-gray-800 p-4">
        </div>
      ))}
    </div>
  );
};