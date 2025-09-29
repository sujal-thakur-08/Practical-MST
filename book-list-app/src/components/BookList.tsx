import React from 'react';
import BookItem from './BookItem';
import { Book } from '../types/Book';

interface BookListProps {
  books: Book[];
  searchTerm: string;
}

const BookList: React.FC<BookListProps> = ({ books, searchTerm }) => {
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredBooks.map(book => (
        <BookItem key={book.title} book={book} />
      ))}
    </div>
  );
};

export default BookList;