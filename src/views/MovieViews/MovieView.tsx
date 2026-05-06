import { DetailItem, LinkGroup, Modal, ImageGrid } from '@/components';
import { type MovieRespsonse, getBackdropUrl, getImageUrl, MOVIE_ENDPOINT } from '@/core';
import { useTmdb } from '@/hooks';

export const MoviesView = () => {
    const nowPlaying = useTmdb('https://api.themoviedb.org/3/movie/now_playing', {}, []);
    const popular = useTmdb('https://api.themoviedb.org/3/movie/popular', {}, []);
    const topRated = useTmdb('https://api.themoviedb.org/3/movie/top_rated', {}, []);
    const upcoming = useTmdb('https://api.themoviedb.org/3/movie/upcoming', {}, []);

    const format MovieResults To ImageGridData = (apiResponseData: any) =>
        apiResponseData?.results?.map((movieItem: any) => ({
            id: movieItem.id,
            imageUrl: `https://image.tmdb.org/t/p/w500${movieItem.poster_path}`,
            primaryText: movieItem.title,
        })) || [];


    return (
        <div
            style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
            }}
        >
            <h1
                style={{
                    fontSize: "30px",
                    fontWeight: 700,
                }}
            >
                Movies
            </h1>

            <section>
                <h2
                    style={{
                        fontSize: "20px",
                        fontWeight: 600,
                    }}
                >
                    Now Playing
                </h2>
                <ImageGrid images={format(nowPlaying)} />
            </section>

            <section>
                <h2
                    style={{
                        fontSize: "20px",
                        fontWeight: 600,
                    }}
                >
                    Popular
                </h2>
                <ImageGrid images={format(popular)} />
            </section>

            <section>
                <h2
                    style={{
                        fontSize: "20px",
                        fontWeight: 600,
                    }}
                >
                    Top Rated
                </h2>
                <ImageGrid images={format(topRated)} />
            </section>

            <section>
                <h2
                    style={{
                        fontSize: "20px",
                        fontWeight: 600,
                    }}
                >
                    Upcoming
                </h2>
                <ImageGrid images={format(upcoming)} />
            </section>
        </div>
    );
}