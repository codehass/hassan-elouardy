import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Work />
      <Feedback />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
