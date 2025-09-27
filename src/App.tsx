import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { useRouter } from './hooks/useRouter';
import './styles/retro.css';

export default function App() {
  const { currentRoute, navigate } = useRouter();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'blog':
        return <BlogPage />;
      case 'home':
      default:
        return (
          <div className="md:ml-48 pt-16 md:pt-0">
            <HomePage />
          </div>
        );
    }
  };

  return (
    <>
    <div className="min-h-screen bg-black retro-bg">
      <Header currentRoute={currentRoute} onNavigate={navigate} />
      {renderCurrentPage()}
    </div>
    </>
  );
}