import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export const hookUpComponent = (stateToProps, actionCreators, component) => {

  const mapDispatchToProps = dispatch => bindActionCreators({
    ...actionCreators
  }, dispatch)

  return connect(
    stateToProps,
    mapDispatchToProps
  )(component);
}

export const createAction = (type, payload) => {
  return {
    type,
    payload
  }
}
export const createThunkAction = (type, apiEndpoint, data) => {
  return async (dispatch) => {
    let resp = await fetch(apiEndpoint, data)
    let payload = await resp.json();
    dispatch({
      type,
      payload
    });
  }
};