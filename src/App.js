import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Loader from './components/Loader';
import BaseLayout from './components/layouts/BaseLayout';
import Homepage from './pages/Homepage';
import Workpage from './pages/Workpage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import ServicesPage from './pages/ServicesPage';
import Projectpage from './pages/Projectpage';
import ImageReveal from './components/ImageReveal';

function App() {
  useSmoothScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/work" element={<Workpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/project/:id" element={<Projectpage />} />
          <Route path="/image" element={<ImageReveal />} />
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;