import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import History from './components/History';
import Pnf from './pages/Pnf';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/main' element={<MainPage></MainPage>}></Route>
        <Route path='/history' element={<History></History>}></Route>
        <Route path='*' element={<Pnf></Pnf>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
