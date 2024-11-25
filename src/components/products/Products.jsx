import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Rating from "../rating/Rating";

import "./products.css"

export default function Products(){
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = "https://671f75cfe7a5792f052e55dd.mockapi.io/items";
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res);
                console.log(res);
            })
            .catch(err => console.log(err));
    }, [])
    
    return(
        <div className="content">
            {
                data.map(item => (
                    <Link to={`/product/${item.id}`} key={item.id}>
                        <div className="productCard" >
                            <p>{item.title}</p>
                            <img src={item.image} alt="" />
                            <Rating rating={item.rating} />
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}