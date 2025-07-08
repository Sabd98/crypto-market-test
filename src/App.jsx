import MarketSection from "./components/MarketSection";
import FavoriteTable from "./components/FavoriteTable";
import "./styles/main.scss";

//Main app layout
function App() {
  return (
    <>
      {/* Header */}
      <header className="bg-[#13213F]/20 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/image3.png"
              alt="Crypto Logo"
              className="h-12 w-12 mr-6"
            />

            <div className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-white font-medium hover:text-blue-400 transition-colors"
              >
                Pasar
              </a>
              <a
                href="#"
                className="text-gray-400 font-medium hover:text-white transition-colors"
              >
                Tentang Kami
              </a>
              <a
                href="#"
                className="text-gray-400 font-medium hover:text-white transition-colors"
              >
                Kontak Kami
              </a>
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Login
            </button>
            <button className="hidden md:block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Daftar
            </button>
          </nav>
        </div>
      </header>
      {/* Main Content */}
      <main className="container mx-auto p-4">
        <MarketSection />
        <FavoriteTable />
      </main>
      {/* Footer */}
      <footer className="mt-24 h-10 text-center text-gray-500">
        © 2025 Crypto Market. All rights reserved.
      </footer>
    </>
  );
}

export default App;
