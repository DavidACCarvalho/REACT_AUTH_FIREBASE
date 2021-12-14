import { Outlet } from "react-router"
import { useAuth } from "../contexts/AuthContext"

const PrivateRoute = () => {
    const { currentUser } = useAuth()

    return (
        <>
            {currentUser && <Outlet />}
        </>
    )
}

export default PrivateRoute
