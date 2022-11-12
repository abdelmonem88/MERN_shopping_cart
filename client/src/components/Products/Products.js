import React from 'react';
import '../../css/components/Products/Products.css';

function Products({ products }) {
  const renderProducts = products.map((product) => {
    return (
      <li key={product.id} className='single_product'>
        <div className='img_wrapper'>
          <img src='https://placehold.jp/250x250.png' alt={product.title} />
        </div>
        <div className='product_details'>
          <h3>{product.title}</h3>
          <span>${product.price}</span>
        </div>

        <button>Add To Cart</button>
      </li>
    );
  });

  return <ul className='products_list'>{renderProducts}</ul>;
}

export default Products;
