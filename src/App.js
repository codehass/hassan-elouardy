import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Feedback from './components/Feedback';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Work />
      <Feedback />
    </div>
  );
}

export default App;
