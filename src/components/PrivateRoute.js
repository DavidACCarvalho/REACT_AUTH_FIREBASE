import { Outlet, Navigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = () => {
    const { currentUser } = useAuth()

    return (
        <>
            {currentUser ? <Outlet /> : <Navigate replace to="/login" />}
        </>
    )
}

export default PrivateRoute
