import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from "../../Hooks/useFormWithValidation";

function SearchForm({ setIsCheckBoxClicked, isCheckBoxClicked, searchHandle }) {
  const formData = useFormWithValidation();
  const { search } = formData.values;
  const { handleChange, errors, isFocused, onFocus } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();
    searchHandle(search);
  };

  return (
    <form className="search-form" noValidate onSubmit={handleSubmit}>
      <div className="search-form__container">
        <input
          name="search"
          required
          className="search-form__input"
          placeholder="Фильм"
          onChange={handleChange}
          value={search || ""}
          onFocus={onFocus}
        />
        <button
          type="submit"
          disabled={Object.keys(errors).length !== 0}
          className="search-form__submit-button"
        />
      </div>
      <span className="search-form__input-error">
        {isFocused && errors.search}
      </span>
      <FilterCheckbox
        setIsCheckBoxClicked={setIsCheckBoxClicked}
        isCheckBoxClicked={isCheckBoxClicked}
      />
    </form>
  );
}

export default SearchForm;
