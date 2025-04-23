import React from "react";
import { FaHome, FaSearch, FaBook, FaSpotify } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf0e6] text-white flex flex-col lg:flex-row font-sans">
      {/* Sidebar */}
      <aside className="bg-[#1e1e1e] w-full lg:w-64 p-6 flex flex-col justify-between min-h-screen">
        <div>
          <div className="text-3xl font-extrabold text-red-500 mb-8">
            Melodija<span className="text-white">.mt</span>
          </div>
          <nav className="space-y-6">
            <div className="flex items-center gap-3 text-lg font-semibold text-white">
              <FaHome /> Home
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-400">
              <FaSearch /> Search
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-400">
              <FaBook /> Your Library
            </div>
          </nav>

          <div className="mt-10">
            <p className="text-sm uppercase text-gray-400 mb-2">Recently played</p>
            <ul className="space-y-2">
              {["L-Avventura", "Skond Il-Qalb", "Mhabbit", "Idba Minn Gdid"].map((title, idx) => (
                <li key={idx} className="text-sm text-white truncate">
                  🎵 {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="mt-8 bg-red-600 hover:bg-red-700 py-2 px-4 rounded text-sm font-medium self-start">
          Upgrade
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-4xl font-bold text-black mb-6">Good morning</h1>

        {/* Recently Played */}
        <section className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Mix", "Top Maltese Songs", "Muzika Muzika", "Classical"].map((title, idx) => (
              <div key={idx} className="bg-[#d44b3d] hover:bg-[#c44235] transition rounded-lg p-4 text-center shadow cursor-pointer">
                <div className="text-white text-xl font-bold mb-2">🎶</div>
                <div className="font-semibold text-white text-sm">{title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Playlists */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">Playlists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Enzò Gusman", "Skond il-Qalb", "Mhabbit", "Idba Minn Gdid"].map((title, idx) => (
              <div key={idx} className="bg-white rounded-lg p-2 text-center shadow text-black">
                <div className="h-32 bg-gray-200 rounded mb-2"></div>
                <div className="font-semibold text-sm">{title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Genres */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">Genres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Folk", "Pop", "Rap", "Rock"].map((genre, idx) => (
              <div key={idx} className="bg-white rounded-lg p-2 text-center shadow text-black">
                <div className="h-32 bg-gray-300 rounded mb-2"></div>
                <div className="font-semibold text-sm">{genre}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Playback Bar (Static) */}
      <footer className="bg-black text-white w-full p-4 flex items-center justify-between text-sm fixed bottom-0 left-0 right-0 z-50">
        <div className="flex items-center gap-3">
          <FaSpotify className="text-green-500" /> Now Playing
        </div>
        <div className="flex items-center gap-2">
          <button>⏮️</button>
          <button>▶️</button>
          <button>⏭️</button>
        </div>
        <div className="text-xs text-gray-400">Volume 🔊 ▓▓▓▓░░</div>
      </footer>
    </div>
  );
}
