import { combineReducers } from 'redux';
import Home from './Home';
import ConferenceCall from './ConferenceCall';
import Contact from './Contact';

const Reducer = combineReducers({
  Home,
  ConferenceCall,
  Contact
});

export default Reducer;
