import * as actionTypes from "../../constants/ActionTypes";

//action for get movie data
function getCustomMsgAction(data) {
  return (dispatch) => {
    return dispatch({ type: actionTypes.GET_CUSTOM_MSG, data });
  };
};





export default getCustomMsgAction;