const HomeReducer = (state = {button: false}, action) => {
  switch (action.type) {

    case 'BUTTON_CLICK':
      return Object.assign({}, state, {
        button: action.data
      });

    default:
      return state;
  }
}

export default HomeReducer;
