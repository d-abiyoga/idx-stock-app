// import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Calculator } from "./pages/Calculator";
import { About } from "./pages/About";
import { Nav } from "./components/Nav";
import { AppContainer } from "./styles/pages/AppLayout.styled"

function App() {
  return (
    <AppContainer className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
