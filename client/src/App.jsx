import Navbar from './components/layout/Navbar';
import './App.css';
import AppRouter from './routes/AppRouter';

const App = () => (
  <div className="App">
    <Navbar />
    <AppRouter />
  </div>
);

export default App;
