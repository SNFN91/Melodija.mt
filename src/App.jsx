import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // ✅ this must be the correct Home.jsx
import ArtistPage from "./pages/Artist"; // or whatever the other file is

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* <== this must point to Home.jsx */}
      <Route path="/artists" element={<ArtistPage />} />
      {/* other routes */}
    </Routes>
  );
}


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf7f1] text-black">
      <Routes>
        {/* Splash screen loads first */}
       <Route
  path="/"
  element={
    <>
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </>
  }
/>

        {/* Main app routes */}
        <Route
          path="/home"
          element={
            <>
              <Header />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/artist/:id"
          element={
            <>
              <Header />
              <main className="flex-grow">
                <Artist />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <>
              <Header />
              <main className="flex-grow">
                <Playlist />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/subscribe"
          element={
            <>
              <Header />
              <main className="flex-grow">
                <Subscribe />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
