import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function LatestNews() {
  return (
    <div className="bg-gray-100 flex items-center gap-2 p-2">
        <h2 className="text-center text-lg font-medium text-white bg-[#D72050] px-5 py-2">Latest</h2>
        <Marquee pauseOnHover="true" speed="60" className="space-x-10 mx-1">
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
            
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, fuga.</Link>

            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, fuga.</Link>

            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, fuga.</Link>

            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, fuga.</Link>

            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, fuga.</Link>
        </Marquee>
    </div>
  )
}
