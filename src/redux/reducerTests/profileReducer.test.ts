import {addPostAC, deletePostAC, profilePageReducer} from '../ProfilePageReducer';
import {v1} from 'uuid';
import {PostsDataType} from '../ReduxStore';

const initialState = {
  initialPostsState: [
    {id: v1(), post: 'hello', likes: 123},
    {id: v1(), post: 'sup', likes: 14123},
    {id: v1(), post: 'Bye', likes: 23},
    {id: v1(), post: 'Aloha', likes: 13},
  ] as Array<PostsDataType>,
  profile: null,
  status: '',
};


test('new post should be added to state', () => {
  const newState = profilePageReducer(initialState, addPostAC('some new post'))

  expect(newState.initialPostsState.length).toBe(5)
})

test('new post name should be correct', () => {
  const newState = profilePageReducer(initialState, addPostAC('some new post'))

  expect(newState.initialPostsState[4].post).toBe('some new post')
})

test('correct post should be delete from state', () => {
  const newState = profilePageReducer(initialState, deletePostAC(initialState.initialPostsState[1].id))

  expect(newState.initialPostsState.length).toBe(3)
})

test('post should not be deleted if id is incorrect', () => {
  const newState = profilePageReducer(initialState, deletePostAC('123124'))

  expect(newState.initialPostsState.length).toBe(4)
})