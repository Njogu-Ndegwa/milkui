import { Login } from './login';
import { SignUp } from './signup';

export const routes = [
    {

        path: "/login",
        exact: "true",
        component: Login

    },
    {

        path: "/signup",
        exact: "true",
        component: SignUp

    }
]