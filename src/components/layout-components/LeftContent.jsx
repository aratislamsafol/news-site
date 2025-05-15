import { useEffect, useState } from "react";


const LeftContent = () => {
    const [ category, setCategory ] = useState([]);

    useEffect(()=>{
        fetch('/data/categories.json')
        .then(response => response.json())
        .then(data =>setCategory(data))
    }, []);
    return (
        <div>
            <div className="flex items-center font-semibold gap-1">
                <h2 className="">All Category</h2>
                <h2>({category.length})</h2>
            </div>
            
            {/* Category List */}
            <div className="flex flex-col gap-1 mt-2">
                {category.map(cat => 
                    <button key={cat.id} className="btn font-medium rounded border-none text-gray-600 p-6" type="button">{cat.name} gdf</button>
                )}
            </div>
        </div>
    );
};

export default LeftContent;