import { Route, BrowserRouter } from 'react-router-dom';
import Landing from '../components/layout/Landing';
import Login from '../_pages/auth/Login';
import Register from '../_pages/auth/Register';

const AppRouter = () => (
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
  </BrowserRouter>
);

export default AppRouter;
