import React from 'react';
import ProductCard from "./component/ProductCard";
import {productList} from "./data";

function App() {
    /*------ Renders-----*/
    const renderProductList = productList.map(product => <ProductCard product={product} key={product.id}/>)

  return (
      <main className="container">
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
                {renderProductList}
          </div>
      </main>

  );
}

export default App;
