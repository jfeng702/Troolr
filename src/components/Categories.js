import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <Link to="">Home</Link>
      <Link to="">Wellness</Link>
      <Link to="">Consulting</Link>
      <Link to="">Automotive</Link>
      <Link to="">Events</Link>
      <Link to="">Tech</Link>
      <Link to="">Pets</Link>
    </div>
  );
};

export default Categories;
