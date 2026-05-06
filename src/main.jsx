import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import BookPage from "./pages/BookPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  </React.StrictMode>
);
