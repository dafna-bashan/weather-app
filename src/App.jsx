import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
// import './App.css';
import './assets/styles/main.scss'
import { Favorites } from './pages/Favorites';
import { NavBar } from './cmps/NavBar';
import { BackgroundImg } from './cmps/BackgroundImg';

function App() {
  return (
    <div>
      <BackgroundImg />
      <NavBar />
      <main>
        <Routes>
          <Route path='/:favId' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
