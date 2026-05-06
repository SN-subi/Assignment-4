import { ButtonGroup, ImageGrid, Pagination } from '@/components';
import { TRENDING_ENDPOINT, IMAGE_BASE_URL, type MovieRespsonse,  type ImageCell } from '@/core';
import { useTmdb } from '@/hooks';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';


export const TrendingView = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);

    const [searchParameters, setSearchParameters] = useSearchParams();
    const selectedInterval = searchParameters.get('interval') || 'day';

    const trendingMoviesResponse = useTmdb<MovieRespsonse>(
        `${TRENDING_ENDPOINT}/${selectedInterval}`,
        { page: page },
        [page, selectedInterval]
    );

      const gridData: ImageCell[] = (trendingMoviesResponse.data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: `${IMAGE_BASE_URL}${result.poster_path}`,
    primaryText: result.original_title,
  }));

    return (
        <section className="space-y-5 p-4 max-w-7xl mx-auto">

            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Trending</h1>

                <ButtonGroup
                    value={selectedInterval}
                    options={[
                        { label: 'Today', value: 'day' },
                        { label: 'Week', value: 'week' },
                    ]}
                    onClick={(value) => setSearchParameters({ interval: value })}
                />
            </div>
            <ImageGrid images={gridData} onClick={(image) => navigate(`/movie/${image.id}/credits`)} />
            <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
        </section>
    );
};