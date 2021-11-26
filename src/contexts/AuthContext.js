import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification
} from "firebase/auth";
//eslint-disable-next-line
import { app } from '../firebase'


const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const auth = getAuth()

    const signUp = async (email, password, passwordConfirmation) => {

        if (password !== passwordConfirmation) return setError("Password's not match")

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            sendEmailVerification(auth.currentUser)
            setError('')
            navigate('/dashboard')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const logIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)

            setError('')
            navigate('/dashboard')
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        setLoading(true)

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false)
            setCurrentUser(user)
        })

        return unsubscribe

    }, [auth])



    return (
        <AuthContext.Provider value={{
            signUp,
            logIn,
            setError,
            setLoading,
            currentUser,
            loading,
            error
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

//CUSTOM HOOK
export const useAuth = () => useContext(AuthContext)

