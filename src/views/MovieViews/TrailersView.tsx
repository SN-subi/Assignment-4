import { MOVIE_ENDPOINT } from '@/core/constants';
import { useTmdb } from '@/hooks';
import { useParams } from 'react-router-dom';

export const TrailersView = () => {
  const { id } = useParams();

  const movieTrailersResponse = useTmdb<any>(
    `${MOVIE_ENDPOINT}/${id}/videos`,
    {},
    [id]
  );

  if (!movieTrailersResponse.data) return <p>Loading...</p>;

  return (
    <section className="space-y-5 p-6">
      {movieTrailersResponse.data.results.map((video: any) => (
        <div key={video.key}>
          <p className="font-bold">{video.name}</p>
          <iframe
            className="w-full h-[300px] rounded-xl"
            src={`https://www.youtube.com/embed/${video.key}`}
            allowFullScreen
          />
        </div>
      ))}
    </section>
  );
};