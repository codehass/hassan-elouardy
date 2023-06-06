import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Work />
        <Feedback />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
