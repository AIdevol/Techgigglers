// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavbarComponents from './components/UI/Navbar';
import AppRoutes from './route/Routes';

const App: React.FC = () => {
  console.log("✅ App is rendering"); // <--- debug
  return (
    <BrowserRouter>
      <NavbarComponents />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
