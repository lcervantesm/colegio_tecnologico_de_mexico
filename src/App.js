import './App.css';
import NavbarBootstrap from './Components/NavBarBootstrap';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home';
import About from './views/Quienes_somos';
import Contacto from './views/Contacto';
import Admisiones from './views/Admisiones';
import OfertaEducativa from './views/Oferta_Educativa';
import Planteles from './views/Planteles';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
        />
          <NavbarBootstrap />
          <br></br>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quienes-somos" component={About}/>
            <Route exact path="/contacto" component={Contacto}/>
            <Route exact path="/admisiones" component={Admisiones}/>
            <Route exact path="/oferta-educativa" component={OfertaEducativa} />
            <Route exact path="/planteles" component={Planteles} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
