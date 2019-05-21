import {
  ADD_INTEREST,
  DEL_INTEREST,
  INIT_DATA,
  EDIT_PHONE,
  EDIT_EMAIL,
  EDIT_MARITAL_STATUS,
  EDIT_NAME_USER
} from "../../constants";

export const data = (data) => ({
  type: INIT_DATA,
  data
});

export const addInterest = (data) => ({
  type: ADD_INTEREST,
  data
});

export const delInterest = (data) => ({
  type: DEL_INTEREST,
  data
});

export const editPhone = (data) => ({
  type: EDIT_PHONE,
  data
});

export const editEmail = (data) => ({
  type: EDIT_EMAIL,
  data
});

export const editMaritalStatus = (data) => ({
  type: EDIT_MARITAL_STATUS,
  data
});

export const editNameUser = (data) => ({
  type: EDIT_NAME_USER,
  data
});
