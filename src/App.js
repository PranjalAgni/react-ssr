import 'bootswatch/dist/cyborg/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/Navbar';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
