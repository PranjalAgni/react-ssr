import 'bootswatch/dist/cyborg/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './views/Home/';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </>
  );
}

export default App;
