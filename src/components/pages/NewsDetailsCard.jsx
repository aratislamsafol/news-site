import { TiArrowLeft } from "react-icons/ti";
import { Link } from "react-router-dom";
const NewsDetailsCard = ({news}) => {
    const {image_url, title, details, category_id} = news;
    return (
        <div className="card w-full shadow-sm">
            <figure className="p-4">
                <img
                src={image_url}
                alt="Shoes"
                className="w-full max-h-[411px] rounded-lg" />
            </figure>
            <div className="card-body py-0">
                <h2 className="text-gray-700 font-bold text-lg md:text-2xl lg:text-3xl">{title}</h2>
                <p className='text-base text-gray-600'>{details}</p>
                <div className="card-actions my-4">
                <Link to={`/category/${category_id}`} className="btn bg-[#D72050] p-3 pe-4 text-white text-base md:text-lg lg:text-xl"><TiArrowLeft className="text-2xl"/> <span>All news in this category</span></Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;