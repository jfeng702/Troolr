import { connect } from 'react-redux';
import ListingsIndex from './ListingsIndex';

const getVisibleListings = (sorting, listings) => {
  // must use slice to re-render as the sort is done in-place
  return listings.slice(0).sort((a, b) => {
      if (sorting === 'rating') {
          return b.averageRating - a.averageRating;
      }

      if (sorting === 'viewcount') {
          const aViews = a.views.length;
          const bViews = b.views.length;
          return bViews - aViews;
      }
    });
};

function mapStateToProps(state) {
  console.log(state);
  const { sorting, listings } = state;
  return {
    listings: getVisibleListings(sorting, listings)
  };
}

export default connect(mapStateToProps)(ListingsIndex);
