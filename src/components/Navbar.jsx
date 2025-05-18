import { Link, NavLink } from "react-router-dom";
import userIcon from '../assets/user.png';
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
   
    return (
        <div className="flex justify-between items-center">
            <div>{user && user.email}</div>
            {/* nav items */}
            <nav className="space-x-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </nav>
            {/* login */}
            <div className="flex gap-2 items-center">
                {
                    user && user?.email ?  <div className="rounded-full w-10 h-10">
                    <img src={user.photoURL} alt="userIcon" />
                    <p>{user.displayName}</p>
                </div> :  <div className="">
                    <img src={userIcon} alt="userIcon" />
                </div>
                }
               
                {
                    user && user?.email ? <button className="btn btn-neutral" onClick={logOut}>LogOut</button>:   <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;