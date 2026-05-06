import { PERSON_ENDPOINT } from '@/core/constants';
import { useTmdb } from '@/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { IMAGE_BASE_URL } from '@/core/constants';

export const CareerView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const personMovieCreditsResponse = useTmdb<any>(
    `${PERSON_ENDPOINT}/${id}/movie_credits`,
    {},
    [id]
  );

  if (!personMovieCreditsResponse) return <p>Loading career data......</p>;

