import './App.css';
import { Route, Routes } from "react-router-dom";
import { TopMenu } from './pages/TopMenu';
import { Search } from './pages/Search';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Routes>
        <Route path="/movies" element={<Search />} />
        <Route path="/list" element={<Watchlist />} />
      </Routes>
    </div>
  )
}

export default App;
