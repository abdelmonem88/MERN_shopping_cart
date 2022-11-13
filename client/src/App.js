import { useState } from 'react';

import Header from './components/layout/Header/Header.js';
import Footer from './components/layout/Footer/Footer.js';
import Products from './components/Products/Products.js';
import Filters from './components/Filters/Filters.js';

import data from './data.json';

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

  const filterProducts = (event) => {
    if (event.target.value === 'ALL') {
      setSize(event.target.value);
      setProducts(data);
      return;
    }
    setSize(event.target.value);
    setProducts(
      // data.filter((product) => product.sizes.indexOf(event.target.value) >= 0)
      data.filter((product) => product.sizes.includes(event.target.value))
    );
  };

  const sortProducts = (event) => {
    const sort = event.target.value;
    setSort(sort);
    setProducts(
      products.slice().sort((a, b) => {
        if (sort === 'lowest') {
          return a.price - b.price;
        } else if (sort === 'highest') {
          return b.price - a.price;
        } else if (sort === 'latest') {
          return b.id - a.id;
        }
      })
    );
  };

  return (
    <div className='App'>
      <Header />
      <main>
        <div className='wrapper_content'>
          <div className='products'>
            <Products products={products} />
          </div>
          <div className='filters'>
            <Filters
              size={size}
              filterProducts={filterProducts}
              sort={sort}
              sortProducts={sortProducts}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
