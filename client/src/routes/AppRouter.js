import { Route, Switch } from 'react-router-dom';
import Landing from '../components/layout/Landing';
import Login from '../_pages/auth/Login';
import Register from '../_pages/auth/Register';
import Dashboard from '../_pages/dashboard/Dashboard';
import PrivateRoute from './private-route/PrivateRoute';

const AppRouter = () => (
  <>
    <Route exact path="/" component={Landing} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  </>
);

export default AppRouter;
