import {
  GET_PERSON_START,
  GET_PERSON_SUCCESS,
  GET_PERSON_FAILURE,
  GET_FILMS_START,
  GET_FILMS_SUCCESS,
  GET_FILMS_FAILURE
} from "../constants";

export function getPerson(data) {
  return {
    type: GET_PERSON_START,
    data
  };
}

export function getPersonSuccess(payload) {
  getFilms(payload);
  return {
    type: GET_PERSON_SUCCESS,
    payload
  };
}

export function getPersonFailure(errors) {
  return {
    type: GET_PERSON_FAILURE,
    payload: errors
  };
}

export function getFilms(data) {
  return {
    type: GET_FILMS_START,
    data: data.films
  };
}

export function getFilmsSuccess(payload) {
  return {
    type: GET_FILMS_SUCCESS,
    payload
  };
}

export function getFilmsFailure(errors) {
  return {
    type: GET_FILMS_FAILURE,
    payload: errors
  };
}
