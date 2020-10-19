import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import {AuthService} from './auth_service';


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                AuthService.isAuthenticated() === true ? ( 
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    )
}