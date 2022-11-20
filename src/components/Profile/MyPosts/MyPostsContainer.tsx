import { addPostAC } from "../../../redux/ProfilePageReducer";
import { PostsDataType, StateType } from "../../../redux/ReduxStore";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  initialPostsState: PostsDataType[];
};
type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void;
};
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    initialPostsState: state.profilePage.initialPostsState,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostAC(newPostText));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
