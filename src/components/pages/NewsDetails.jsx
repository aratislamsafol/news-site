import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header";
import RightContent from "../layout-components/RightContent";
import { useEffect, useState } from "react";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
    const [news, setNews]= useState({});
    const {id} = useParams();
    const allData = useLoaderData();

    useEffect(()=>{
        const newsDetails = allData.find(data => data.id === id)
        setNews(newsDetails);
    },[id, allData])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-3">Dragon News</h2>
                    <NewsDetailsCard news={news}/>
                </section>

                <aside className="col-span-3">
                    <RightContent/>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;