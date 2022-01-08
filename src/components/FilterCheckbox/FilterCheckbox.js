import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  const [isFilterClicked, setIsFilterClicked] = React.useState(false);

  const onFilterClick = () => {
    if (isFilterClicked === false) {
      setIsFilterClicked(true);
    } else {
      setIsFilterClicked(false);
    }
  };

  return (
    <div className="filter">
      <p className="filter__text">Короткометражки</p>
      <div
        className={`filter__button ${
          isFilterClicked && "filter__button_clicked"
        }`}
      >
        <input
          type="checkbox"
          className="filter__checkbox"
          onClick={onFilterClick}
        ></input>
      </div>
    </div>
  );
}

export default FilterCheckbox;
