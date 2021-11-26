import { useRef } from "react"
import { BsKey } from "react-icons/bs"
import { useAuth } from "../contexts/AuthContext"

const UpdatePassword = () => {
    const password = useRef()
    const passwordConfirmation = useRef()
    const { changePassword, loading, error, setLoading } = useAuth()

    const handleChangePassword = (e) => {
        e.preventDefault()
        setLoading(!loading)
        if (window.confirm('Want to change the Password?')) {
            return changePassword(password.current.value, passwordConfirmation.current.value)
        }

        setLoading(!loading)
    }

    return (
        <>
            <form className="Form" onSubmit={handleChangePassword}>
                {error && <p className="error">{error}</p>}
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
                <button type="submit">CONFIRM</button>
            </form>
        </>
    )
}

export default UpdatePassword
