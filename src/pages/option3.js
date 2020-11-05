import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {Button} from 'antd';
import {AuthService} from '../components/auth_service';

export default function Option1 () {

    const [redirect, setRedirect] = useState(false);

    const logoutHandler = () => {
        AuthService.logout();
        setRedirect(true);
    }

    if(redirect) return <Redirect to ='/login' />;
    return (
        <>
        <div>
            Option 3
        </div>

        <Button onClick={logoutHandler}>
            Logout
        </Button>
        </>
    )
}