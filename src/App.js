import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Films from './pages/Films';
import MyList from './pages/MyList';
import MyProfile from './pages/MyProfile';
import Searcher from './pages/Searcher';
import Series from './pages/Series';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/films' element={<Films />} />
          <Route path='/mylist' element={<MyList />} />
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/searcher' element={<Searcher />} />
          <Route path='/series' element={<Series />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
