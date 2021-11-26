import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const Dashboard = () => {
    const { currentUser, logOut } = useAuth()

    useEffect(() => { }, [currentUser])

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <div className="profile">
                <div className="avatar">
                    {/* ADD AVATAR WITH DATA FOR EACH USER */}
                </div>
                <p>{currentUser.email}</p>
                <div className="btn-container">
                    <Link to="/updateprofile"><button>UPDATE</button></Link>
                    <Link to="/"><button onClick={logOut}>LOGOUT</button></Link>
                </div>
            </div>
        </div >
    )
}

export default Dashboard


