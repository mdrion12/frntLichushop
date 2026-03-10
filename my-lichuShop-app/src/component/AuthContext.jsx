import { useContext, createContext, useState } from "react";


const Authcontext = createContext();
export const useauth = () => useContext(Authcontext);

export const AuthProvider = ({ children }) => {

    const [isLogin, setisLogin] = useState(false)
    const login = () => {
        setisLogin(true);
    };
    const logout = () => {
        setisLogin(false)
    };
    return (
        <Authcontext.Provider value={{ isLogin, login, logout }}>
            {children}
        </Authcontext.Provider>
    )

}