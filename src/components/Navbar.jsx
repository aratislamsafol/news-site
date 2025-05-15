import { NavLink } from "react-router-dom";
import userIcon from '../assets/user.png';
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            {/* nav items */}
            <nav className="space-x-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </nav>
            {/* login */}
            <div className="flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="userIcon" />

                </div>
                <button type="button" className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;