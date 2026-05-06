import { ImageGrid } from '@/components';
import { MOVIE_GENRE, TV_GENRE, IMAGE_BASE_URL } from '@/core';
import { useTmdb } from '@/hooks';
import { useNavigate, useParams } from 'react-router-dom';

const genreList = [
  { label: 'Action', id: 28 },
  { label: 'Adventure', id: 12 },
  { label: 'Animation', id: 16 },
  { label: 'Mystery', id: 9648 },
  { label: 'Comedy', id: 35 },
  { label: 'Horror', id: 27 },
  { label: 'Mystery', id: 9648 },
  { label: 'Kids', id: 10762 },
  { label: 'Fantasy', id: 14 },
];

const formatGenreResults = (apiResponseData: any, titleKey: string) =>
  apiResponseData?.results?.map((item: any) => ({
    id: item.id,
    imageUrl: `${IMAGE_BASE_URL}${item.poster_path}`,
    primaryText: item[titleKey],
  })) || [];

export const GenreView = () => {
  const { genreId } = useParams();
  const navigate = useNavigate();

  const movieGenreResponse = useTmdb(MOVIE_GENRE, { with_genres: genreId }, [genreId]);
  const tvGenreResponse = useTmdb(TV_GENRE, { with_genres: genreId }, [genreId]);

  return (
    <section className="space-y-8 p-5 max-w-7xl mx-auto">

      <div className="flex flex-wrap gap-2">
        {genreList.map((genreItem) => (
          <button
            key={genreItem.id}
            onClick={() => navigate(`/genre/${genreItem.id}`)}
            className="rounded-full border px-4 py-2"
          >
            {genreItem.label}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-bold">Movies</h2>
      <ImageGrid
        images={formatGenreResults(movieGenreResponse.data, 'title')}
        onClick={(image) => navigate(`/movie/${image.id}`)}
      />

      <h2 className="text-xl font-bold">TV Shows</h2>
      <ImageGrid
        images={formatGenreResults(tvGenreResponse.data, 'name')}
        onClick={(image) => navigate(`/tv/${image.id}`)}
      />

    </section>
  );
};