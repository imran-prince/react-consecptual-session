import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProducts.css'
 

const SingleProducts = (props) => {
    return (
        <div  
        data-aos="flip-left" 
        data-aos-easing="linear"
        data-aos-duration="1500"
        className='col-md-4'
        >
           <div  className="card p-3 border">
               <img className='w-50 m-auto' src={props.product.image} alt="" />
           <h1>{props.product.title.slice(0,10)}</h1>
           <div className="d-flex justify-content-around me-2">
           <button onClick={props.setCartCount} className='btn btn-primary'>Add to cart</button>
           <button className='btn btn-danger'>Delet</button>
           {/* <button className='btn btn-success'>info</button> */}
           <ReactModal product={props.product}></ReactModal>
           </div>
           </div>
             
        </div>
    );
};

export default SingleProducts;