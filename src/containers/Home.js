import {connect} from 'react-redux';
import Component from '../components/Home';
import Actions from '../actions/Home';

const mapStateToProps = state => (
  state
);

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => dispatch(Actions.buttonClick())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
