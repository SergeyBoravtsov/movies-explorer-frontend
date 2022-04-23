import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({setIsCheckBoxClicked, isCheckBoxClicked}) {

  const onFilterClick = () => {
    if (isCheckBoxClicked === false) {
      setIsCheckBoxClicked(true);
    } else {
      setIsCheckBoxClicked(false);
    }
  }

  return (
    <div className='filter'>
      <p className="filter__text">Короткометражки</p>
      <div className={`filter__button ${isCheckBoxClicked && 'filter__button_clicked'}`}>
        <input type='checkbox' className="filter__checkbox" onClick={onFilterClick}/>
      </div>
    </div>
  );
}

export default FilterCheckbox;
