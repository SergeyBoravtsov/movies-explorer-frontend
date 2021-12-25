import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input required className="search-form__input" placeholder="Фильм" />
        <button className="search-form__submit-button" />
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
