import {connect} from 'react-redux';
import Component from '../components/Contact';
// import Actions from '../actions/Contact';

const mapStateToProps = state => (
  state
);

const mapDispatchToProps = dispatch => ({
  // actions: Actions
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
