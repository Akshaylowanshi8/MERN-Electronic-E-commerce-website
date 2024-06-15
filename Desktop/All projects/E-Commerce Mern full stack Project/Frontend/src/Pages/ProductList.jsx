import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:8000/Displayproduct/LoadAllProduct")
      .then(response => {
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
        setLoading(false);
      });
  };

  const handleFilter = () => {
    const filtered = filteredProducts.filter(product => {
      return (!minPrice || product.Price >= minPrice) &&
             (!maxPrice || product.Price <= maxPrice);
    });
    setFilteredProducts(filtered);
  console.log(filtered)

  };


  const resetFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    fetchProducts();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <button onClick={handleFilter} className="px-4 py-2 bg-blue-500 text-white rounded">
          Filter
        </button>
        <button onClick={resetFilters} className="px-4 py-2 ml-2 bg-gray-500 text-white rounded">
          Reset
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product._id} className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold">{product.Name}</h2>
            <p className="text-gray-700">{product.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
