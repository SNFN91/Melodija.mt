import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white border-b border-red-600 p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-red-700">Melodija.mt</Link>
      <nav className="space-x-4">
        <Link to="/" className="text-sm font-semibold hover:underline">Home</Link>
        <Link to="/subscribe" className="text-sm font-semibold hover:underline">Subscribe</Link>
      </nav>
    </header>
  );
}

export default Header;
