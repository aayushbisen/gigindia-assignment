import { useAuth } from '../context/AuthContext'


import {
    Route,
    Redirect
} from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
    let {currentUser} = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          currentUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;