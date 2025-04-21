import React, { useEffect, useState } from 'react';
import ArtistCard from '../components/ArtistCard';
import artistData from '../assets/artists.json';

function Home() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setArtists(artistData.artists);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Featured Artists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default Home;
