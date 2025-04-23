import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default App;
