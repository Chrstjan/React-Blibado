import { Header } from './components/Header/Header'
import { HeaderText } from './components/Header/HeaderText/HeaderText'
import { Navigation } from './components/Header/Navigation/Navigation'
import { Main } from './components/Main/Main'
import { About } from './components/Main/About/About'
import { Locations } from './components/Main/Locations/Locations'
import { Gallery } from './components/Main/Gallery/Gallery'
import { Footer } from './components/Footer/Footer'
import { LocationFrame } from './components/Footer/LocationFrame/LocationFrame'
import { LocationInfo } from './components/Footer/LocationInfo/LocationInfo'
import './App.scss'

function App() {

  return (
    <>
      <Header>
        <HeaderText />
        <Navigation />
      </Header>
      <Main>
        <About videoSrc={"./src/assets/pexels-taryn-elliott-9583751 (720p).mp4"}/>
        <Locations />
        <Gallery />
      </Main>
      <Footer>
        <LocationFrame locationUrl={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3069.12259614415!2d9.966123686014548!3d57.04816051297148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1724229628562!5m2!1sda!2sdk"}/>
        <LocationInfo />
      </Footer>
    </>
  )
}

export default App
