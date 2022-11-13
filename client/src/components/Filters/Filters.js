import React from 'react';
import '../../css/components/Filters/Filters.css';

function Filters({ size, filterProducts, sort, sortProducts }) {
  return (
    <div className='filters_wrapper'>
      <h3 className='filters_title'>Filter</h3>
      <div className='filters_contnet'>
        <div className='products_count'>
          Number of products: <span>4</span> Products
        </div>
        <div className='filter_by_size'>
          <h5 className='filter_subtitle'>By Size</h5>
          <select
            name='by_size'
            id='by_size'
            value={size}
            onChange={(event) => filterProducts(event)}
          >
            <option value='ALL'>ALL</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
          </select>
        </div>
        <div className='order'>
          <h5 className='filter_subtitle'>Order By</h5>
          <select
            name='order'
            id='order'
            value={sort}
            onChange={(event) => sortProducts(event)}
          >
            <option value='latest'>Latest</option>
            <option value='highest'>Highest</option>
            <option value='lowest'>Lowest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
