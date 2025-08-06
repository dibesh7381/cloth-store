import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CartPage from "./components/Cartpage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <footer className="bg-black text-white text-center py-4">
        &copy; 2025 Clothing Store
      </footer>
    </div>
  );
}

export default App;



