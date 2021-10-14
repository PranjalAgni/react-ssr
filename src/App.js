import 'bootswatch/dist/cyborg/bootstrap.min.css';
import './App.css';
import { Navbar } from './components/Navbar';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </>
  );
}

export default App;
