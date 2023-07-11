import './App.css';
import Carousel from './Components/Carousel_main/Carousel_main';
import Demo from './Components/Demo/Demo';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Showcase from './Components/Showcase/Showcase'

function App() {
  return (
    <div className='app'>
        <Nav></Nav>
        <Header></Header>
        <Carousel></Carousel>
        <Showcase></Showcase>
        <Demo></Demo>
    </div>
  );
}

export default App;
