
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import Sobre from './pages/sobre/Sobre';
import Perfil from './pages/perfil/Perfil';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh] bg-gray-200'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/perfil" element={<Perfil/>} />
              <Route path="/sobre-nos" element={<Sobre />} />
              </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    );
}


export default App;