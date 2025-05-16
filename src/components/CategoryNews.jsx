import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
            {categoryDatas.length} news
        </div>
    );
};

export default CategoryNews;