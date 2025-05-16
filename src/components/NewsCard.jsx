
import { useState } from "react";
import { FaRegStar, FaStar,FaEye  } from "react-icons/fa";
import { IoBookmarkOutline , IoShareSocialOutline  } from "react-icons/io5";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const [ read, setRead ] = useState(false);
    const {
        title,
        author,
        thumbnail_url,
        total_view,
        rating,
        tags,
        others,
        published_date,
        details,
    } = news;

    const handleClick = () => {
        setRead(!read);
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className="mb-4 border-2 border-gray-100 rounded-lg">
            {/* card header */}
            <div className="flex justify-between items-center bg-gray-100 p-3">
                {/* left side */}
                <div className="flex items-center gap-2">
                    <img src={author.img} className="rounded-full w-10 h-10" alt="author img" />
                    <div className="">
                        <h5 className="font-semibold text-gray-600">{author.name}</h5>
                        <p className="text-gray-400">2025-04-22T17</p>
                    </div>
                </div>
                {/* right side */}
                <div className="flex gap-2">
                    <IoBookmarkOutline  className="w-6 h-6 text-gray-500 hover:text-cyan-300 cursor-pointer"/>
                    <IoShareSocialOutline  className="w-6 h-6 text-gray-500 hover:text-cyan-500 cursor-pointer"/>
                </div>
            </div>
            {/* card body */}
            <div className="p-3 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-700">{title}</h2>
                <div className="mt-2">
                    <img src={thumbnail_url} className="rounded-lg w-full object-cover max-h-[262px]" alt={title} />
                </div>
                {!read ?  
                <div>
                    <p className="my-2 text-gray-500">{details.slice(0,400).concat("...")}</p>
                    <button type="button" onClick={handleClick} className="text-amber-500">Read More</button>
                </div> :
                <div>
                    <p className="my-2 text-gray-500">{details}</p>
                    <button type="button" onClick={handleClick} className="text-amber-500">Read Less</button>
                </div>
                }
            </div>
            {/* card footer */}
            <div className="flex justify-between items-center p-2">
                <div className="flex gap-1">
                    <Rating className="mt-[2px]" initialRating={rating.number} emptySymbol={<FaRegStar className="text-gray-400 w-5 h-5 me-1" />} fullSymbol={<FaStar className="text-yellow-400 w-5 h-5" />}/>
                    <span className="text-gray-800 text-lg">{rating.number}</span>
                </div>

                {/* right side */}
                <div className="flex gap-2 text-gray-400">
                    <FaEye className="w-6 h-6"/>
                    <p className="mt-[1px]">{total_view}</p>
                </div>
            </div>
            
        </div>
  );
};

export default NewsCard;