import React from 'react';
import { Book } from '../types/Book';

interface BookItemProps {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    return (
        <div className="book-item">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
        </div>
    );
};

export default BookItem;