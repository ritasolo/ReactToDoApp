import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  ADD_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
  EDIT_TODO
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const addTodo = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: ADD_TODO, payload: response.data });
  history.push("/");
};

export const fetchTodos = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const fetchTodo = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_TODO, payload: response.data });
};

export const editTodo = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_TODO, payload: response.data });
  history.push("/");
};

export const deleteTodo = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_TODO, payload: id });
  history.push("/");
};
