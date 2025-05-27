import React, {createContext, useState, useEffect, useContext} from 'react';

const AuthContext = createContext();

export const useAuth = ()=>{
    return useContext(AuthContext);
}

export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(()=>{
        const userId = localStorage.getItem('userId');
        setCurrentUser(userId);

        const tokenExpiration = localStorage.getItem('tokenExpiration');
        if(tokenExpiration){
            const now = new Date().getTime();
            const timeLeft = now - parseInt(tokenExpiration);
         
            console.log(now)
            if(timeLeft > 0){
                const timeoutId = setTimeout(() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('userId');
                    localStorage.removeItem('tokenExpiration');
                    setCurrentUser(null);
                }, timeLeft);
                return () => clearTimeout(timeoutId);
            } 
        }
    }, []);

    const value = {
        currentUser, setCurrentUser
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
