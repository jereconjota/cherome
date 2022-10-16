import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth, getStudent } from "../utils/firebase";

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);

    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = async (email, password) => {

        //buscamos el usuario en firestore
        const user = await getStudent(email);
        setUserData(user.data());

        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => signOut(auth);

    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    useEffect(() => { //if user is logged in, set user to the user object, else set user to null
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log({ currentUser });
            setUser(currentUser);
            setUserData(null);
            setLoading(false);
        });
        return () => unsubuscribe();
    }, []);

    return (
        <authContext.Provider
            value={{
                signup,
                login,
                user,
                logout,
                loading,
                loginWithGoogle,
                resetPassword,
                userData
            }}
        >
            {children}
        </authContext.Provider>
    );
}