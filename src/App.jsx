import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { About, Contact, Home, Shop } from "./pages";
import { Footer, Navbar, WhatsappBtn } from "./constants";
import { PageNotFound } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchProduct } from "./Redux/Reducers/productSlice";
import { Checkout } from "./containers";

function App() {
  const dispatch = useDispatch();
  const { toggle } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(FetchProduct());
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/checkout"
            element={toggle ? <Checkout /> : <PageNotFound />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <WhatsappBtn/>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
