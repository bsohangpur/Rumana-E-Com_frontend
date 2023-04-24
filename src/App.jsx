import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { Home } from './pages';
import { Footer, Navbar } from './constants';

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
