import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/404';
import Header from './components/Header/Header';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
     <Header/>

{/* multiple dynamic routes go inside the Routes component */}
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/projects' Component={Projects} />
      <Route path='/contact' Component={Contact} />
      {/* 404 route always goes at the bottom of the routes list */}
      <Route path='/*' Component={NotFound} />
    </Routes>
    </Router>
  );
}

export default App;
