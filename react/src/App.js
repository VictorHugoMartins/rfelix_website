import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Galeria from './Pages/Galeria/Galeria';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/Blog" exact component={Blog}/>
          <Route path="/Galeria" exact component={Galeria}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;