import { Link, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const UpdateProfile = () => {
    const { setError } = useAuth()

    return (
        <div className="update-container">
            <h2>Update Your Profiler</h2>
            <div className="update">
                <div className="btn-container">
                    <Link to="updateemail"><button onClick={() => setError('')}>EMAIL</button></Link>
                    <Link to="updatepassword"><button onClick={() => setError('')}>PASSWORD</button></Link>
                </div>
                <Outlet />
                <Link to="/dashboard"><button>CANCEL</button></Link>
            </div>
        </div>
    )
}

export default UpdateProfile
