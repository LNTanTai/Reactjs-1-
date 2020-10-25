import {
  DELETE_USER,
  SUMIT_USER,
  EDIT_USER,
  GETKEYWORD_USER,
} from "./constant";

export const actDeleteUser = (user) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};

export const actSummitUser = (user) => {
  return {
    type: SUMIT_USER,
    payload: user,
  };
};

export const actEditUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export const actGetKeyword = (keyword) => {
  return {
    type: GETKEYWORD_USER,
    payload: keyword,
  };
};
