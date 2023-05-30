import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookForm = () => {
  const [books, setBooks] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://gist.githubusercontent.com/nanotaboada/6396437/raw/855dd84436be2c86e192abae2ac605743fc3a127/books.json');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredBooks = books.filter((book) => book.year === selectedYear);

  return (
    <div>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Select Year</option>
        {/* Generate options based on available years */}
        {Array.from(new Set(books.map((book) => book.year))).map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <form>
        {/* Display filtered books */}
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            {/* Display additional book information */}
          </div>
        ))}
      </form>
    </div>
  );
};

export default BookForm;
