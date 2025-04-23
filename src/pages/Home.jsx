import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf5e6] text-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="bg-[#1e1e1e] w-full lg:w-64 p-6 flex flex-col justify-between">
        <div>
          <div className="text-2xl font-extrabold text-red-500 mb-8">
            Melodija<span className="text-white">.mt</span>
          </div>
          <nav className="space-y-4">
            <div className="text-lg font-semibold text-white">Home</div>
            <div className="text-lg text-gray-400">Search</div>
            <div className="text-lg text-gray-400">Your Library</div>
          </nav>
          <div className="mt-10">
            <p className="text-sm uppercase text-gray-400 mb-2">Recently played</p>
            <ul className="space-y-2">
              {['L-Avventura', 'Skond Il-Qalb', 'Mhabbit', 'Idba Minn Gdid'].map((title, idx) => (
                <li key={idx} className="text-sm text-white truncate">
                  🎵 {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="mt-8 bg-red-600 hover:bg-red-700 py-2 px-4 rounded text-sm font-medium">Upgrade</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold text-black mb-6">Good morning</h1>

        {/* Recently Played */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-black mb-3">Recently played</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Mix", "Top Maltese Songs", "Muzika Muzika", "Classical"].map((title, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 text-black text-center shadow">
                <div className="text-4xl mb-2">🎶</div>
                <div className="font-medium text-sm">{title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Playlists */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-black mb-3">Playlists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Enzò Gusman", "Skond il-Qalb", "Mhabbit", "Idba Minn Gdid"].map((title, idx) => (
              <div key={idx} className="bg-white rounded-lg text-center p-4 shadow text-black">
                <div className="h-32 w-full bg-gray-300 rounded mb-2"></div>
                <div className="font-semibold text-sm">{title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Genres */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-3">Genres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Folk", "Pop", "Rap", "Rock"].map((genre, idx) => (
              <div key={idx} className="bg-white rounded-lg text-center p-4 shadow text-black">
                <div className="h-32 w-full bg-gray-200 rounded mb-2"></div>
                <div className="font-semibold text-sm">{genre}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
