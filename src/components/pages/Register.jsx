import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from '../../provider/AuthProvider';


const Register = () => {
    const {createNewUser, setUser, updateUserProfile}= useContext(AuthContext);

    const [error, setError] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form  = new FormData(e.target);
        const name = form.get('name');
        if(name.length < 6) {
            setError({...error, name: "must Provide 6 Charachter or Upper "});
            return;
        }
        const email = form.get('email');
        const photo = form.get('url');
        const password = form.get('password');
        const terms = form.get('terms');

        createNewUser(email, password)
        .then(result=> {
            setUser(result.user)
            updateUserProfile({displayName: name, photoURL: photo})
            .then(()=>{
                navigate("/");
            })
            .catch(err=>console.log(err.code))
        })
        .catch({
            // console.log("Error :",err.code, err.message);
        })


    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="font-bold text-2xl text-center text-gray-600 border-b border-gray-300 mx-12 py-4 mt-6">Register your account</h2>
                <div className="card-body">
                    <form className="fieldset" onSubmit={handleSubmit}>
                        <label className="label font-semibold text-gray-600">Your Name</label>
                        <input type="text" name="name" className="input" placeholder="Enter Your Name" />
                        {
                            error.name && <label className="label font-semibold text-red-600">{error.name}</label>
                        }
                        <label className="label font-semibold text-gray-600">Photo URL</label>
                        <input type="text" name="url" className="input" placeholder="Photo Url" />
                        <label className="label font-semibold text-gray-600">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        {
                            error.email && <label className="label font-semibold text-red-600">{error.email}</label>
                        }
                        <label className="label font-semibold text-gray-600">Password</label>
                        
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div className="flex items-center mt-2 gap-2">
                            <input type="checkbox" name="terms" className="checkbox" /><span>Accept Term & Conditions</span>
                        </div>
                        <button className="btn btn-neutral mt-4">Register</button>

                        <p className="text-center py-2">Dont’t Have An Account ? <Link to="/auth/login" className="text-red-500">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;