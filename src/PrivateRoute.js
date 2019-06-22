import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, auth, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          auth.user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps
)(PrivateRoute);
  