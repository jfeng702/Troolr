import React from 'react';
// import data from './profile/data';
import StarRatingComponent from 'react-star-rating-component';

const ListingsIndex = ({ listings }) => {
  return (
    <div className="listings container">
      <div className="grid">
        {listings.map((item,id) =>
          <div className="listings-item cell" key={id}>
            <img className="responsive" alt="" src={item.profile_picture}></img>
            <div className="listing-caption responsive">
              <h3>{item.title}</h3>
              <h4>{item.name}</h4>
              <h5>{item.address.city}, {item.address.state}</h5>
              <div className="caption-bot">
                <StarRatingComponent
                  name={item.name}
                  value={item.averageRating}
                  editing={false}
                  />
                <button
                  className="">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingsIndex;
