import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import BookForm from './BookForm.jsx'
import BookList from './BookList.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/addBook">Add Book</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/addBook" element={<BookForm />} />
      </Routes>
  </BrowserRouter>
)
