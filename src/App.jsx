import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Playlist from './pages/Playlist';
import Subscribe from './pages/Subscribe';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf7f1] text-black">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
