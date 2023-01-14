import '../src/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Component/About';
import Footer from './Component/Footer';
import Home from './Component/Home';
import MiniDetail from './Component/MiniDetail';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
import Skills from './Component/Skills';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/'>
            <Navbar />
            <Home />
            <MiniDetail />
            <About />
            <Project />
            <Skills />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
