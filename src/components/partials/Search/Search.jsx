import React from "react";
import "./Search.css";

// search component for filtering candidates by characters in name and e-mail

export const Search = ({ title, search, setSearch }) => {
    const updateSearch = (e) => {                         //helper function for onChange input
        setSearch(e.target.value);
    }
    return (
      <nav className="searchbar navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">{title}</span>
          <form className="form-inline my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search..."
              onChange={updateSearch}
              value={search}
            />
          </form>
        </div>
      </nav>
    );
};
