 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
 
import Allproducts from './Components/Allproducts/Allproducts';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  const [count,setCount]=useState(0)
  const setCartCount=()=>{
    setCount(count+1)
  }
  useEffect(()=>{
    AOS.init();
  },[])
 
  return (
    <div className="App">
      
       {/* <Tes></Tes> */}
       <Menubar count={count}></Menubar>
       <Allproducts setCartCount={setCartCount}></Allproducts>
      
    </div>
  );
}

export default App;
