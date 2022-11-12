import { useState } from 'react';

import Header from './components/layout/Header/Header.js';
import Footer from './components/layout/Footer/Footer.js';
import Products from './components/Products/Products.js';

import data from './data.json';

function App() {
  const [products, setProducts] = useState(data);

  return (
    <div className='App'>
      <Header />
      <main>
        <div className='wrapper_content'>
          <div className='products'>
            <Products products={products} />
          </div>
          <div className='filters'>
            <h3>Filters</h3>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
