import {
  ADD_INTEREST,
  DEL_INTEREST,
  EDIT_EMAIL,
  EDIT_MARITAL_STATUS, EDIT_NAME_USER,
  EDIT_PHONE,
  INIT_DATA
} from '../../constants';
import {dataUser} from '../../data/user';
import {nameLocalStorage} from '../../constants';

const dataLocalStore = localStorage.getItem(nameLocalStorage);

const dataState = dataLocalStore ? JSON.parse(dataLocalStore) : dataUser.user;

const data = (state=dataState, {data, type}) => {

  switch(type) {
    case INIT_DATA :
      return [{
        ...data
      }];
    case ADD_INTEREST :
      return {
        ...state,
        interests: [data, ...state.interests]
      };
    case DEL_INTEREST :
      return {
        ...state,
        interests: [...state.interests.filter( val => val !== data )]
      };
    case EDIT_PHONE :
      return ({
        ...state,
        phone: data
      });
    case EDIT_EMAIL :
      return ({
        ...state,
        email: data
      });
    case EDIT_MARITAL_STATUS :
      return ({
        ...state,
        maritalStatus: data
      });
    case EDIT_NAME_USER :
      return ({
        ...state,
        name: data
      });
    default:
      return state
  }
};

export default data;