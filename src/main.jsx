import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookForm from './BookForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App brand="Ford" colour="Red" cars={['bmw', 'audi', 'rr', 'ford']}/>*/}
    <BookForm />
  </StrictMode>,
)
