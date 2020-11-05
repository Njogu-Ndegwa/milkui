import Option1 from './option1';
import Option2 from './option2';
import Option3 from './option3';
import Dashboard from './dashboard';


export const routes = [
    {
        path: "/option1",
        exact: "true",
        component: Option1
    },
    {
        path: "/option2",
        exact: "true",
        component: Option2
    },
    {
        path: "/option3",
        exact: "true",
        component: Option3
    },

    {
        path: "/",
        exact: "true",
        component: Dashboard
    }

]