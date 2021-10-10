import { connect } from "react-redux";
//import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import MessageComponent from "../components/messagecomponent/MessageComponent";
import  getCustomMsgAction  from "../../src/store/action/CustomMsgAction";

const mapStateToProps = (state) => {
  return {
    customMsgs: state.messageReducer.listOfCustomMsg
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
        getCustomMsgAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent);
