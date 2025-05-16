
import { FaGoogle, FaGithub  } from "react-icons/fa";
const SocialLogin = () => {
    return (
         <div className="*:w-full space-y-2">
            <button type="button" className="btn btn-outline btn-info hover:text-white"><FaGoogle /> Login with Google</button>
            <button type="button" className="btn btn-outline btn-accent hover:text-white"><FaGithub  /> Login with Github</button>
        </div>
    );
};

export default SocialLogin;