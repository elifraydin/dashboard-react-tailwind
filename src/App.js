import Header from "./components/header/Header"
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <Header />

      <div className="w-full min-h-[90vh] grid grid-cols-12">
        <NavBar />
        <div>

          {/* leftpart */}
          {/* rightpart */}

        </div>
      </div>
    </div>
  );
}

export default App;
