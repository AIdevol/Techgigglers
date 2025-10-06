// src/Routes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import OurProcess from '../pages/OurProcess';
import Services from '../pages/Services';
import Resources from '../pages/Resources';
import Career from '../pages/Careers';
import HomeView from '../pages/Home';
import Blog from '../pages/Blog';



const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/our-process" element={<OurProcess />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/careers" element={<Career />} />
      <Route path ="/resources/blog" element={<Blog />}></Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
