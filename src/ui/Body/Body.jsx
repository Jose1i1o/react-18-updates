import React, { useState } from 'react'

import GetUsers from "../../components/GetUsers";
import ProductList from "../../components/ProductList";
import Input from "../../components/Input";

export const Body = () => {

  // first render

  // const [ showProducts, setShowProducts ] = useState(false);
  // const [ showCreators, setShowCreators ] = useState(false);

  return (
    <>
      <div className="input">
        <Input />
      </div>
        <div className="main">
          <div className="products">
              <ProductList />
            {/* <button onClick={ onClickProducts } className="m-2"> Show Products </button>
            { showProducts && <div>{ <ProductList /> }</div> } */}
          </div>
          <div className="sidebar">
            <GetUsers />
            {/* <button onClick={ onClickCreators } className="m-2"> Show me who created this </button>
            { showCreators && <div>{ <GetUsers /> }</div> } */}
          </div>
      </div>
    </>
  )
}