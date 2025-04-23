import React from "react";

const featuredArtists = [
  {
    name: "Emma Muscat",
    image: "/artists/emma-muscat.jpg",
    subtitle: "Top Tracks"
  },
  {
    name: "Aidan",
    image: "/artists/aidan.jpg",
    subtitle: "Essential Tunes"
  },
  {
    name: "Ira Losco",
    image: "/artists/ira-losco.jpg",
    subtitle: "Fan Favorites"
  },
  {
    name: "Destiny",
    image: "/artists/destiny.jpg",
    subtitle: "Powerful Vocals"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf5e6] text-black font-sans">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-between items-center px-8 py-5 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Melodija Logo" className="h-12 w-12" />
          <span className="text-2xl font-extrabold tracking-wide">Melodija.mt</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          <li className="cursor-pointer hover:text-red-600 transition">Home</li>
          <li className="cursor-pointer hover:text-red-600 transition">Browse</li>
          <li className="cursor-pointer hover:text-red-600 transition">About</li>
          <li className="cursor-pointer hover:text-red-600 transition">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-28 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Discover Malta’s Sound
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-700 mb-10">
          A platform for local artists, past and present. Stream Maltese music anywhere, anytime.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition">
          Start Listening
        </button>
      </section>

      {/* Featured Playlists Grid */}
      <section className="px-8 pb-28">
        <h2 className="text-3xl font-bold mb-10 text-left">Featured Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {featuredArtists.map((artist, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{artist.name}</h3>
                <p className="text-sm text-gray-600">{artist.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
