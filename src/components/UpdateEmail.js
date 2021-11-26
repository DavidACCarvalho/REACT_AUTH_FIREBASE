import { useRef } from "react"
import { AiOutlineMail } from "react-icons/ai"
import { useAuth } from "../contexts/AuthContext"

const UpdateEmail = () => {
    const email = useRef()
    const { changeEmail, error, loading, setLoading } = useAuth()

    const handleChangeEmail = (e) => {
        e.preventDefault()
        setLoading(!loading)
        if (window.confirm('Want to change the email?')) {
            return changeEmail(email.current.value)
        }

        setLoading(!loading)
    }

    return (
        <>
            {error && <p className="error">{error}</p>}
            <form className="Form" onSubmit={handleChangeEmail}>
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
                <button type="submit">CONFIRM</button>
            </form>
        </>
    )
}

export default UpdateEmail
