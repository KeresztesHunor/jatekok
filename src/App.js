import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jatekok from './pages/Jatekok';
import TicTacToe from './pages/tictactoe/TicTacToe';
import LightsOut from './pages/loghtsout/LightsOut';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import TicTacToeModel from './model/TicTacToeModel';
import LightsOutModel from './model/LightsOutModel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Játékok</h1>
      </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Jatekok />} />
              <Route path="tictactoe" element={<TicTacToe model={new TicTacToeModel()} />} />
              <Route path="lightsout" element={<LightsOut model={new LightsOutModel()} />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      <footer>Keresztes Hunor</footer>
    </div>
  );
}

export default App;
