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
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
