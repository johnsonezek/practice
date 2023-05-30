import React, { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      // Perform search or any other action
      console.log('Perform search with', searchTerm);
    }, 5000); // Debounce delay: 500 milliseconds

    return () => {
      clearTimeout(timerId); // Clear the timer on component unmount or when searchTerm changes
    };
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
    </div>
  );
};
export default SearchComponent;
