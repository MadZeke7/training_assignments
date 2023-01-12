import axios from "axios";
import { useState } from "react";
import '../styles/products_axios.css'

function ProductsFakeStore(){
    const [productsArray, setproductsArray] = useState([]);

    const getStudents = () =>{
        axios.get("https://fakestoreapi.com/products").then( (response)=>{
            setproductsArray(response.data);
        })
    }

    return(
        <>
        <button onClick={getStudents}>Get Data</button>    
        <div id="products">
            {productsArray.map(item=>
                <div className="item">
                    <img src={item.image} alt="item"/>
                    <p className="title">{item.title}</p>
                    <p className='price'>$ {item.price}</p>
                </div>    
            )}
        </div>
        </>
    )
}

export default ProductsFakeStore;