import React from 'react';

const Dropdown = ({onSortingChange, listings}) => {
  return (
    <div className="dropdown">
      <div className="dropdown-text">
        <h4>Newest Contractors</h4>
        <h4 className="orange">({listings.length} Results)</h4>
      </div>
      <select
        className="select"
        onChange={ e => onSortingChange(e.target.value)}
      >
        <option value="rating">Top Rated</option>
        <option value="viewcount">Most Popular</option>
      </select>
    </div>
  );
};

export default Dropdown;
