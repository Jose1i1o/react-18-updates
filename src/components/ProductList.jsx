import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";


const ProductList = () => {

  const [ products, setProducts ] = useState([]);

  const getProducts = async() => {

    const response = await fetch('https://peticiones.online/api/products')

    if(!response.ok) {
      throw new Error('Error while fetching products')
    }
    const data = await response.json();
    console.log(data);
    return setProducts(data.results);
  }

  useEffect(() => {
    getProducts();
  } , []);

  return (
    <>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList