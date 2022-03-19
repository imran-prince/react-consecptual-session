import React, { useEffect, useState } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';
import './Allproducts.css'

const Allproducts = ({setCartCount}) => {
    const [products,setProcducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProcducts(data))
    },[])
    console.log(products);
    return (
        <div>
            <h1>All Products</h1>
           <div className="row container">
           {
                products.map(pd=>( <SingleProducts key={pd.id} setCartCount={setCartCount} 
                product={pd}></SingleProducts>))
            }
           </div>
           
        </div>
    );
};

export default Allproducts;