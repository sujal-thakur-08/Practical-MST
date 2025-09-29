# Book List Application

This is a simple React application that displays a list of books and allows users to filter the list by title using a search bar.

## Features

- Displays a list of books with their title, author, and year of publication.
- Includes a search bar to filter books by title.

## Project Structure

```
book-list-app
├── src
│   ├── components
│   │   ├── BookList.tsx
│   │   ├── BookItem.tsx
│   │   └── SearchBar.tsx
│   ├── data
│   │   └── books.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── Book.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd book-list-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will start the development server and open the application in your default web browser.

## Components

- **BookList**: Renders a list of `BookItem` components based on the filtered search term.
- **BookItem**: Displays individual book details (title, author, year).
- **SearchBar**: Input field for users to type in a search term to filter the book list.

## Data

The application uses a predefined list of books stored in `src/data/books.ts`.

## License

This project is open-source and available under the MIT License.