import {
  GET_PERSON_START,
  GET_PERSON_SUCCESS,
  GET_FILMS_SUCCESS,
} from "../constants";

export default (state = { loading: false, person: false }, action) => {
  switch (action.type) {
    case GET_PERSON_START:
      return {
        ...state,
        loading: true
      };
    case GET_PERSON_SUCCESS:
      return {
        ...state,
        person: action.payload
      };
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        films: action.payload
      };
    default:
      return state;
  }
};
