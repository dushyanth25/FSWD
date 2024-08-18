import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import StoreList from "../components/Store/StoreList";
import ProductDetails from "../components/Store/ProductDetails";
import BookService from "../components/BookService"; // Import the BookService component
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/store" element={<StoreList />} />
      <Route path="/store/:id" element={<ProductDetails />} />
      <Route path="/purchase/:id" element={<ProductDetails />} />
      <Route path="/book-service" element={<BookService />} /> {/* New Route for BookService */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
