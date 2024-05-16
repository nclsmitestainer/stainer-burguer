import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Services from './pages/Services';
import Menu from './pages/Menu';
import Ratings from './pages/Ratings';
import Cart from './pages/Cart';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
