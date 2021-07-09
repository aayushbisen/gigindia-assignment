import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TopNav from "./components/TopNav";
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './helpers/PrivateRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <TopNav />
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/register' component={RegisterForm} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
