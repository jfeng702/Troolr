import { connect } from 'react-redux';
import DropdownBar from './DropdownBar';

function mapStateToProps(state, props) {
  const { sorting, listings } = state;
  return {
    sorting,
    listings
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    onSortingChange(sorting) {
      dispatch({
        type: 'SET_SORTING',
        sorting
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownBar);
