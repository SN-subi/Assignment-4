import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};
