import { connect } from 'react-redux';
import Component from '../components/ConferenceCalling';
// import Actions from '../actions/ConferenceCalling';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  // actions: Actions
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
