import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Workpage from './pages/Workpage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import Projectpage from './pages/Projectpage';
import Contactbar from './components/Contactbar';
import ImageReveal from './components/ImageReveal';
import Footer from './components/Footer';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <AnimatedCursor innerSize={16} outerSize={54} color='244, 196, 48' outerAlpha={0.2} innerScale={0.7} outerScale={4} />
          <Contactbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/work' element={<Workpage />} />
            <Route path='/about' element={<Aboutpage />} />
            <Route path='/contact' element={<Contactpage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/testimonials' element={<TestimonialsPage />} />
            <Route path='/project/:id' element={<Projectpage />} />
            <Route path='/image' element={<ImageReveal />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;