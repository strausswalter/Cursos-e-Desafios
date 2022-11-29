import React, { useEffect, useState } from "react";
import "./Product.css";

const Product = ({image, name, description, price, buyFunc, size}) =>{
    const [count, setCount] = useState(0);

    useEffect(function(){
    })

    const contar = () => {
        setCount(count + 1);
    }
    
    return (
        <div className="product" style={{
            width: `${size}%`,
            float: 'left'
        }}>
            <span className="img" style={{
                backgroundImage: `url(${image})`
            }}></span>
            <h2>{name}</h2>
            <p>{description}</p>
            <small>{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</small>
            <button onClick={buyFunc}>Comprar</button>
            <button onClick={contar}>Contar {count}</button>
        </div>
    )
}

Product.defaultProps = {
    name: "",
    image: "",
    price: 0.0,
    description: "",
    buyFunc: () => {}
}

export default Product;