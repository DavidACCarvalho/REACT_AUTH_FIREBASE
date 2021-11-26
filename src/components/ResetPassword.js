import { useRef } from "react"
import { useAuth } from "../contexts/AuthContext"
import { AiOutlineMail } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"

const ResetPassword = () => {
    const email = useRef()
    const navigate = useNavigate()
    const { resetPassword, loading, error, setLoading } = useAuth()

    const handleResetPassword = (e) => {
        e.preventDefault()
        setLoading(!loading)
        resetPassword(email.current.value)
    }
    return (
        <div className="form-container">
            <h2>Find your account</h2>
            <form className="Form" onSubmit={handleResetPassword}>
                {error && <p>{error}</p>}
                <div className="reset-instructions">
                    <p>Insert your email and receive instructions.</p>
                </div>
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
                <div className="btn-container">
                    <button onClick={() => navigate(-1)}>CANCEL</button>
                    <button type="submit">RESET PASSWORD</button>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword

