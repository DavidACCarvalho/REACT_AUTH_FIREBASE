import { useRef } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { AiOutlineMail } from 'react-icons/ai'
import { BsKey } from 'react-icons/bs'

const SignUp = () => {
    const email = useRef()
    const password = useRef()
    const passwordConfirmation = useRef()
    const { signUp, loading, error, setError, setLoading } = useAuth()

    const handleSignUp = (e) => {
        e.preventDefault()
        setLoading(!loading)
        signUp(email.current.value, password.current.value, passwordConfirmation.current.value)
    }

    return (
        <div className="form-container">
            <h2>SIGN UP</h2>
            <form className="Form" onSubmit={handleSignUp}>
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
                <label htmlFor="passwordConfirmation">
                    <BsKey />
                    <input
                        type="password"
                        disabled={loading}
                        required
                        placeholder='Password Confirmation'
                        ref={passwordConfirmation}
                    />
                </label>
                <button type="submit">SIGN UP</button>
                <div>
                    <p>Already have an account?
                        <Link
                            to="/"
                            onClick={() => setError('')}
                        > Log In</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
