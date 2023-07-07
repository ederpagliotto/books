import React, { useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = React.useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books');
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>Books Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book">{book.cover && <img />}</div>
        ))}
      </div>
    </div>
  );
};

export default Books;
