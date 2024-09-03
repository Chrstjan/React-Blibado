import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { LocationsPage } from "./pages/LocationsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { MainLayout } from "./layouts/MainLayout";
import './App.scss'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<LandingPage />}/>
          <Route path={"/locations"} element={<LocationsPage />}></Route>
          <Route path={"aktuelt"} element={<GalleryPage />}></Route>
          <Route path={"/*"} element={<div>404 Not Found</div>}></Route>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
