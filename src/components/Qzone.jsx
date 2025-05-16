import swimmingImg from '../assets/swimming.png'
import classRoom from '../assets/class.png';
import playground from '../assets/playground.png'
const Qzone = () => {

    return (
        <div className="flex flex-col gap-3 mt-4 items-center bg-gray-100 py-3 rounded-lg">
            <h2 className='font-bold text-xl self-start px-4'>Q - Zone</h2>
            <div>
                <img src={swimmingImg} className='w-full' alt="swimming image" />
            </div>

            <div>
                <img src={classRoom} alt="Class image" />
            </div>

            <div>
                <img src={playground} alt="playground image" />
            </div>
         
        </div>
    );
};

export default Qzone;