import FindUs from "../FindUs";
import Poster from "../Poster";
import Qzone from "../Qzone";
import SocialLogin from "../SocialLogin";
const RightContent = () => {

    return (
        <div className="">
            <h2 className="font-bold mb-2 text-xl">Login With</h2>
            <SocialLogin></SocialLogin>
            <FindUs/>
            <Qzone/>
            <Poster/>
        </div>
    );
};

export default RightContent;