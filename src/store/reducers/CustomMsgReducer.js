import * as actionTypes from "../../constants/ActionTypes";

const initialState = {
listOfCustomMsg:{
    sucess:"Your Data has been saved",
    error:"Oops !! Something weny wrong",
    warning:"Your Password will expires within 2days",
    info:"You have 1 new message",
    unstyled:"Hanna moos likes your status"
}
};

//reducer for get data
export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes. GET_CUSTOM_MSG:
    
      return {
        ...state,
        listOfCustomMsg: {...action.data},
      };
   
    default:
      return state;
  }
}