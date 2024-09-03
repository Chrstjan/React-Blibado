import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "./layouts/MainLayout";
import { LandingPage } from "./pages/LandingPage";
import { LocationsPage } from "./pages/LocationsPage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import './App.scss'
import { MissingPage } from "./pages/MissingPage";

function App() {

  return (
    <>
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
    </>
  )
}

export default App
