import { useParams, Link } from 'react-router-dom';
import artistData from '../assets/artists.json';

function Artist() {
  const { id } = useParams();
  const artist = artistData.artists.find((a) => a.id === parseInt(id));

  if (!artist) return <div className="p-6">Artist not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={`/assets/${artist.image}`}
        alt={artist.name}
        className="w-full h-64 object-cover rounded-md mb-4 border"
      />
      <h1 className="text-3xl font-bold mb-2">{artist.name}</h1>
      <p className="text-gray-800 mb-4">{artist.bio}</p>
      <div className="space-x-4 mb-4">
        {Object.entries(artist.socials).map(([platform, url]) => (
          <a key={platform} href={url} target="_blank" className="text-sm text-blue-600 underline">
            {platform}
          </a>
        ))}
      </div>
      <a
        href={artist.listen_link}
        className="inline-block bg-red-700 text-white px-5 py-2 rounded hover:bg-red-800 transition"
      >
        Listen on Melodija.mt
      </a>
      <div className="mt-6">
        <Link to="/" className="text-sm text-red-700 underline">← Back to Home</Link>
      </div>
    </div>
  );
}

export default Artist;
