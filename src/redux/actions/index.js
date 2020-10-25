import {
  DELETE_PRODUCT,
  TANG_GIAM_SL,
  ADD_PRODUCT,
  DETAIL_PRODUCT,
} from "./../constains";

export const actDelete = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};

export const actTangGiamSL = (data) => {
  return {
    type: TANG_GIAM_SL,
    payload: data,
  };
};

export const actThemSL = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const actDetail = (data) => {
  return {
    type: DETAIL_PRODUCT,
    payload: data,
  };
};
