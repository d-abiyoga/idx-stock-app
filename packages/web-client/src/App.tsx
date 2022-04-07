// import "./styles/App.css";
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global.styled';
import { AppContainer } from './styles/pages/AppLayout.styled';
// import Home from './pages/Home';
import Calculator from './pages/Calculator';
import About from './pages/About';
import Nav from './components/organism/Navbar';
import Company from './pages/Company';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import useTheme from './hooks/useTheme';
import AverageCalculator from './pages/AverageCalculator';
import Cagr from './pages/Cagr';

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <ThemeProvider theme={{ ...theme, setTheme }}>
      <GlobalStyle />
      <AppContainer className="App">
        <header>
          <Nav />
        </header>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Calculator />} />
          <Route path="calculator" element={<Calculator />}></Route>
          <Route path="calculator/average" element={<AverageCalculator />} />
          <Route path="calculator/cagr" element={<Cagr />} />
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Company />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
