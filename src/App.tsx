import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { Header } from './compoments/elements/Header';
import { Footer } from './compoments/elements/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
        (
          <>
          <Header/>
        <LoginPage />
        <Footer/>
        </>
        )} />
        <Route path="/profile" element={(
        <>
        <Header />
        <ProfilePage /> 
        <Footer/>
        </>
        
  )}/>
        <Route path="/" element={(
        <>
        <HomePage />
        </>)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;