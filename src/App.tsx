import { MainLayout } from '@/layouts';
import { CreditsView, MovieView, NowPlayingView, ReviewsView, SearchView, TrailersView, TrendingView, CareerView, GenreView, ImagesView, SeasonsView, EpisodeView, ErrorView, PersonView, TelevisionView, HomeView } from '@/views';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />

      <Route element={<MainLayout />}>
        <Route path="/now-playing" element={<NowPlayingView />} />
        <Route path="/trending" element={<TrendingView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/movie/:id" element={<MovieView />}>
          <Route path="credits" element={<CreditsView />} />
          <Route path="reviews" element={<ReviewsView />} />
          <Route path="trailers" element={<TrailersView />} />
        </Route>
        <Route path="/person/:id" element={<PersonView />}>
          <Route path="career" element={<CareerView />} />
          <Route path="images" element={<ImagesView />} />
        </Route>
        <Route path="/tv/:id" element={<TelevisionView />}>
          <Route path="seasons" element={<SeasonsView />} />
          <Route path="episodes/:seasonNumber" element={<EpisodeView />} />
        </Route>
        <Route path="/genre/:genreId" element={<GenreView />} />
      </Route>
      <Route path=" " element={<ErrorView />} />
    </Routes>
  );
};
