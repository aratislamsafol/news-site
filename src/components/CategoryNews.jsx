import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
    const [categoryDatas, setCategoryDatas ] = useState([]);
    const datas = useLoaderData();
    const {id} = useParams();

    useEffect(()=> {
        if (datas && id) {
            const filtered = datas.filter(data => data.category_id === Number(id));
            setCategoryDatas(filtered);
        }
    },[datas, id]);

    return (
        <div>
            <h2 className="font-semibold text-xl">Dragon News Home</h2>
            <p className="text-gray-400 text-sm mb-2">{categoryDatas.length} News Found On This Category</p>

            {
                categoryDatas.map(singleNews => (
                    <NewsCard key={singleNews.id} news = {singleNews}/>
                ))
            }
        </div>
    );
};

export default CategoryNews;