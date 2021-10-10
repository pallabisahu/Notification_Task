import React, { Component } from "react";

import { Link } from "react-router-dom";
import close from "../../close.png";
import "./styles.css";

class MessageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unStyled: true,
      success: true,
      info: true,
      error: true,
      warning: true,
      customMsgs: {},
    };
  }

  componentDidMount() {
    this.props.getCustomMsgAction();
    let { customMsgs = {} } = this.props;
    this.setState({ customMsgs: customMsgs });
  }
  colseMsgBox = (type) => {
    if (type == "unstyled") {
      this.setState({ unStyled: !this.state.unStyled });
    }
    if (type == "info") {
      this.setState({ info: !this.state.info });
    }
    if (type == "error") {
      this.setState({ error: !this.state.error });
    }
    if (type == "warning") {
      this.setState({ warning: !this.state.warning });
    }
    if (type == "success") {
      this.setState({ success: !this.state.success });
    }
  };

  render() {
    let { customMsgs = {} } = this.state;

    let {
      unstyled = "",
      info = "",
      sucess = "",
      error = "",
      warning = "",
    } = customMsgs;
    return (
      <div className="">
        <h5 className="text-danger text-center mt-2">React Assignments</h5>
        <div className=" parentDivBorder m-5">
     
          <div className="row   p-3">
            <div className="col-xl-2 col-lg-2">
              {this.state.success ? (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("success")}
                >
                  HIDE SUCCESS
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("success")}
                >
                  SHOW SUCCESS
                </button>
              )}
            </div>
            <div className="col-xl-2 col-lg-2">
              {this.state.error ? (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("error")}
                >
                  HIDE ERROR
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("error")}
                >
                  SHOW ERROR
                </button>
              )}
            </div>
            <div className="col-xl-2 col-lg-2">
              {this.state.warning ? (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("warning")}
                >
                  HIDE WARNING
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("warning")}
                >
                  SHOW WARNING
                </button>
              )}
            </div>
            <div className="col-xl-2 col-lg-2">
              {this.state.info ? (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("info")}
                >
                  HIDE INFO
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("info")}
                >
                  SHOW INFO
                </button>
              )}
            </div>

            <div className="col-xl-2 col-lg-2">
              {this.state.unStyled ? (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("unstyled")}
                >
                  HIDE UNSTYLED
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-light"
                  onClick={() => this.colseMsgBox("unstyled")}
                >
                  SHOW UNSTYLED
                </button>
              )}
            </div>
          </div>
          {this.state.unStyled ? (
            <div className="d-flex justify-content-end  mt-5 pr-2">
              <p className="unstyledTxt unstyle p-2 ">
                {customMsgs && unstyled}
                <img
                  className="ml-2 pr-2 cursor"
                  src={close}
                  onClick={() => this.colseMsgBox("unstyled")}
                ></img>
              </p>
            </div>
          ) : (
            ""
          )}
          {this.state.info ? (
            <div className="d-flex justify-content-end  mt-2 pr-2">
              <p className="infoTxt info p-2 ">
                &#9432; {customMsgs && info}
                <img
                  className="ml-2 pr-2 cursor"
                  src={close}
                  onClick={() => this.colseMsgBox("info")}
                ></img>
              </p>
            </div>
          ) : (
            ""
          )}
          {this.state.warning ? (
            <div className="d-flex justify-content-end  mt-2 pr-2">
              <p className="warnTxt warn p-2 ">
                &#9432; {customMsgs && warning}
                <img
                  className="ml-2 pr-2 cursor"
                  src={close}
                  onClick={() => this.colseMsgBox("warning")}
                ></img>
              </p>
            </div>
          ) : (
            ""
          )}
          {this.state.error ? (
            <div className="d-flex justify-content-end  mt-2 pr-2">
              <p className="infoTxt error p-2 ">
                &#x2716; {customMsgs && error}
                <img
                  className="ml-2 pr-2 cursor"
                  src={close}
                  onClick={() => this.colseMsgBox("error")}
                ></img>
              </p>
            </div>
          ) : (
            ""
          )}
          {this.state.success ? (
            <div className="d-flex justify-content-end  mt-2 pr-2">
              <p className="infoTxt success p-2 ">
                &#x2705; {customMsgs && sucess}
                <img
                  className="ml-2 pr-2 cursor"
                  src={close}
                  onClick={() => this.colseMsgBox("success")}
                ></img>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default MessageComponent;
