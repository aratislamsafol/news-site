import { FaFacebookF , FaTwitter, FaInstagram   } from "react-icons/fa";
const FindUs = () => {
    return (
        <div className="mt-3">
            <h2 className="font-bold text-xl mb-3">Find Us On</h2>
            
            <div className="join join-vertical flex">
                <button className="btn join-item justify-start flex items-center gap-2 py-6">
                    <FaFacebookF  className="text-3xl text-sky-600  rounded-full p-[6px] bg-gray-200"/> 
                    <span className="text-base">Facebook</span>
                </button>
                <button className="btn join-item justify-start flex items-center gap-2 py-6">
                    <FaTwitter className=" text-cyan-400 text-3xl rounded-full p-[6px] bg-gray-200"/> 
                    <span className="text-base">Twitter</span>
                </button>
                <button className="btn join-item justify-start flex items-center gap-2 py-6">
                    <FaInstagram className=" text-red-400 text-3xl rounded-full p-[6px] bg-gray-200"/> 
                    <span className="text-base">Instagram</span>
                </button>
            </div>
        </div>
    );
};

export default FindUs;