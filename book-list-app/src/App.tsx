import React, { useState } from 'react';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import booksData from './data/books';

const App: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <h1>Book List</h1>
            <SearchBar onSearch={handleSearch} />
            <BookList books={booksData} searchTerm={searchTerm} />
        </div>
    );
};

export default App;