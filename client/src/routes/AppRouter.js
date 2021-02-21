import { Route } from 'react-router-dom';
import Landing from '../components/layout/Landing';
import Login from '../_pages/auth/Login';
import Register from '../_pages/auth/Register';

const AppRouter = () => (
  <>
    <Route exact path="/" component={Landing} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
  </>
);

export default AppRouter;
