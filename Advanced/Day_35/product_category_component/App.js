import ProductList from './components/ProductList';
import { useState } from 'react';
import './App.css';

function App() {

  const [category, setCategory] = useState("");
  
  const handleChange = (e) =>{
    setCategory(e.target.value);
  }

  return (
    <div className='App'>
      <label>Select:</label>
      <select onChange={handleChange}>
        <option value="">All Products</option>
        <option value="Cold Drinks">Cold Drinks</option>  
        <option value="Snacks">Snacks</option>  
      </select>
      <ProductList category={category}/>
    </div>
  );
}

export default App;
