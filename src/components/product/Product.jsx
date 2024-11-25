import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Rating from "../rating/Rating";
import "./product.css";

export default function Product(){
    const { id } = useParams();
    const [productData, setProductData] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function redirection(){
        navigate("/products")
    }

    useEffect(() => {
        let url = `https://671f75cfe7a5792f052e55dd.mockapi.io/items/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setProductData(res);
                console.log(res);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            });
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }
    return(
        <div className="contentBlock">
            <div className="product">
                <p>{productData.title}</p>
                <img src={productData.image} alt="" />
                <p>Price: {productData.price}$</p>
                <p>Description: {productData.description}</p>
                <Rating rating={productData.rating} />
            </div>
            <button onClick={redirection}>Назад</button>
        </div>
    )
}