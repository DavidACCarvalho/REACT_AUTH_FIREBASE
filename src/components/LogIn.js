import { useRef } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { AiOutlineMail } from 'react-icons/ai'
import { BsKey } from 'react-icons/bs'

const LogIn = () => {
    const email = useRef()
    const password = useRef()
    const { logIn, loading, error, setError, setLoading } = useAuth()

    const handleLogIn = (e) => {
        e.preventDefault()
        setLoading(!loading)
        logIn(email.current.value, password.current.value)
    }

    return (
        <div className="form-container">
            <h2>Login Form</h2>
            <form className="Form" onSubmit={handleLogIn}>
                {error && <p className="error">{error}</p>}
                <label htmlFor="email">
                    <AiOutlineMail />
                    <input
                        type="email"
                        disabled={loading}
                        required
                        placeholder='Email'
                        ref={email}
                    />
                </label>
                <label htmlFor="password">
                    <BsKey />
                    <input
                        type="password"
                        disabled={loading}
                        required
                        placeholder='Password'
                        ref={password}
                    />
                </label>
                <div className="reset-password">
                    <Link
                        to="/resetpassword"
                        onClick={() => setError('')}
                    >Forgot Your Password?</Link>
                </div>
                <button type="submit">LOGIN</button>
                <div>
                    <p>Create an account?
                        <Link
                            to="/signup"
                            onClick={() => setError('')}
                        > Sign Up</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LogIn
