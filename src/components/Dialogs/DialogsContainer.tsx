import React from "react";
import {
  addMessageAC,
  updateNewMessageInputAC,
} from "../../redux/DialogsPageReducer";
import { DialogsPageType, StateType } from "../../redux/ReduxStore";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose, Dispatch } from "redux";
import { withAuthRedirectComponent } from "../HOCs/redirectHoc/withAuthRedirectComponent";

type MapStateToPropsType = {
  dialogsPage: DialogsPageType;
};
type MapDispatchToPropsType = {
  onNewMessageInputChange: (newText: string) => void;
  onAddMessage: () => void;
};

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    onNewMessageInputChange: (newText: string) => {
      dispatch(updateNewMessageInputAC(newText));
    },
    onAddMessage: () => {
      dispatch(addMessageAC());
    },
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirectComponent
)(Dialogs);
