import '../styles/productsState.css'
import { useState } from 'react'

function ProductsState(){
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const [result, setResult] = useState("");

    const handleSubmit = () =>{
        setResult(`You have bought ${quantity} ${name} at ${price} for a total of ${price * quantity}`)
    }

    return(
        <div>
            <h4>Enter Product Details</h4>
            <div className="inputs">
                <input placeholder="Name" id="name" onChange={e=>setName(e.target.value)}/>
                <input placeholder="Price" id="price" onChange={e=>setPrice(e.target.value)}/>
                <input placeholder="Quantity" id="quantity" onChange={e=>setQuantity(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <p>{result}</p>
        </div>
    )
}

export default ProductsState;