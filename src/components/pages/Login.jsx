import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const {signInUserPassword, setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    console.log(location);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData =new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");

        signInUserPassword(email, password)
        .then(res => {
            setUser(res.user);
            navigate(location?.state? location.state: "/");
        })
        .catch((err) => {
            setError({...error, login:err.code});
        })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="font-bold text-2xl text-center text-gray-600 border-b border-gray-300 mx-12 py-4 mt-6">Login your account</h2>
                <div className="card-body">
                    <form className="fieldset" onSubmit={handleSubmit}>
                    <label className="label font-semibold text-gray-600">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label font-semibold text-gray-600">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    {
                        error.login && <label className="text-sm text-red-600">{error.login}</label>
                    }
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className="text-center py-2">Dont’t Have An Account ? <Link to="/auth/register" className="text-red-500">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;