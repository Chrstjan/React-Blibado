import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from "react-ga4";

import { MainLayout } from "./layouts/MainLayout";
import { LandingPage } from "./pages/LandingPage";
import { LocationsPage } from "./pages/LocationsPage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { MissingPage } from "./pages/MissingPage";
import './App.scss'
import { useState } from "react";

function App() {

  const helmetContext = {};
  const [withAnalytics, setWithAnalytics] = useState(true);

  if (withAnalytics === true) {
    //Initialize google analytics with GTag ID
    ReactGA.initialize('G-4DYZV1LRJ8');
  }
  
  return (
    <>
    <HelmetProvider context={helmetContext}>
    <Router>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<LandingPage />}/>
          <Route path={"/locations"} element={<LocationsPage />}></Route>
          <Route path={"/about"} element={<AboutPage />}></Route>
          <Route path={"/aktuelt"} element={<GalleryPage />}></Route>
          <Route path={"/*"} element={<MissingPage />}></Route>
        </Route>
      </Routes>
      </Router>
    </HelmetProvider>
    </>
  )
}

export default App
