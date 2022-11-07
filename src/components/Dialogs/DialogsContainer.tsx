import React from "react";
import {
  addMessageAC,
  updateNewMessageInputAC,
} from "../../redux/DialogsPageReducer";
import { DialogsPageType } from "../../redux/ReduxStore";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  dialogsPage: DialogsPageType;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  onNewMessageInputChange: (newText: string) => void;
  onAddMessage: () => void;
};

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;
const mapStateToProps = (state: any): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
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

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
