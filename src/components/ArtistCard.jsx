import React from 'react';

function ArtistCard({ artist }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-red-600 p-4 w-full max-w-sm">
      <img
        src={`/assets/${artist.image}`}
        alt={artist.name}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h2 className="text-xl font-bold mb-1">{artist.name}</h2>
      <p className="text-sm text-gray-700 mb-3">{artist.bio}</p>
      <a
        href="#"
        className="inline-block bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition"
      >
        Listen on Melodija.mt
      </a>
    </div>
  );
}

export default ArtistCard;
