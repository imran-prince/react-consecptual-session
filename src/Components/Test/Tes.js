import React, { useState } from 'react';
 

const Tes=()=> {
 const[count,setCount]=useState(0)
/*  const minus=()=>{
     setCount(count-1)
     
 }
 const plus=()=>{
    setCount(count+1)
 } */
 if(count<0)
 {
     setCount(0)
 }
 
    return (
        <div>
            
           <div className="count mt-5">
               <h1>{count}</h1>
               <button onClick={()=>setCount(count+1)}  className='ms-3 p-3'>+</button>
               <button onClick={()=>setCount(count-1)} className='ms-3 p-3'>-</button>

           </div>
        </div>
    );
};

export default Tes;