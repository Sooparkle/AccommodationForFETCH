import React, { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { DataList } from "../components/DataList";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
export const Main = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (newSearchResults) => {
    setSearchResults(newSearchResults);
  };

  return (
    <>
      <div className="main">
        <SearchForm
          onSearch={handleSearch}
          onClick={() => {
            navigate("/");
          }}
        />

        {searchResults.length <= 0 && <DataList />}
        <Header />
      </div>
      <Footer />
    </>
  );
};
