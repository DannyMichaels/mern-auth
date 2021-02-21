import Navbar from './components/layout/Navbar';
import './App.css';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Navbar />
    <AppRouter />
  </Provider>
);

export default App;
