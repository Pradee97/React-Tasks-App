// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchBeers } from './Api';
import List from './List';
import Pagination from './Pagination';
// import DateFilter from './components/DateFilter';

function App() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [beforePage, setBeforePage] = useState('');
  const [afterPage, setAfterPage] = useState('');

  useEffect(() => {
    fetchBeers(page, beforePage, afterPage).then((response) => {
      setBeers(response.data);
    });
  }, [page, beforePage, afterPage]);

  const handlePageChange = (newPage,before, after) => {
    setBeforePage(before);
    setAfterPage(after);
    setPage(1);
  };

  const handleFilterChange = (before, after) => {
    setBeforePage(before);
    setAfterPage(after);
    setPage(1); // Reset to the first page when applying filters
  };

  return (
    <div className="App">
      <h1>Beer App</h1>
      {/* <DateFilter onFilterChange={handleFilterChange} /> */}
      <List beers={beers} />
      <Pagination currentPage={page} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
