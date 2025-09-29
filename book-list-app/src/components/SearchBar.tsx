import React from 'react';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e: { target: { value: any; }; }) => onSearchChange(e.target.value)}
        />
    );
};

export default SearchBar;