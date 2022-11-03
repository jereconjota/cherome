import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth, saveStudent } from "../utils/firebase";

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = async (email, password) => {
        //save user on firestore and auth
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        await saveStudent({ uid: user.user.uid, email: user.user.email });
        return user;
    };

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => signOut(auth)

    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => { //if user is logged in, set user to the user object, else set user to null
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
    
        console.log('useEffect on useContext');
        return () => unsubuscribe();
    }, []);


    return (
        <authContext.Provider
            value={{
                signup,
                login,
                logout,
                resetPassword,
                user,
                loading,
            }}
        >
            {children}
        </authContext.Provider>
    );
}