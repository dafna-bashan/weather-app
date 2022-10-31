import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
// import './App.css';
import './assets/styles/main.scss'
import { Favorites } from './pages/Favorites';
import { NavBar } from './cmps/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main style={{ marginTop: '100px' }}>
        <Routes>
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
