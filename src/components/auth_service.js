const login = () => {
    window.localStorage.setItem("auth", true);
};

 const isAuthenticated = () => {
    if(window.localStorage.getItem("auth") == null) {
        return false;
    } else {
        return true;
    }
};

 const logout = () => {
    if(window.localStorage.getItem("auth") != null) {
        window.localStorage.removeItem("auth");
    }
}

export const AuthService = {
    login,
    isAuthenticated,
    logout
}