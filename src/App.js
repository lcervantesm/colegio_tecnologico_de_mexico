import './App.css';
import NavbarBootstrap from './Components/NavBarBootstrap';
import CarouselMain from './Components/Carousel';
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
        crossorigin="anonymous"
      />
        <NavbarBootstrap />
        <CarouselMain />
        <Menu />
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
