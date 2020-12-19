import { put, takeLatest } from "redux-saga/effects";
import {
  getPersonSuccess,
  getPersonFailure,
  getFilmsSuccess,
  getFilmsFailure
} from "../actions/characterAction";

import { GET_PERSON_START, GET_FILMS_START } from "../constants";

function* getPerson(action) {
  try {
    const payload = yield fetch(action.data.url).then(res => res.json());
    yield getFilms({ type: GET_FILMS_START, payload });
    yield put(getPersonSuccess(payload));
  } catch (error) {
    yield put(getPersonFailure(error));
  }
}

function* getFilms(action) {
  try {
    let newFilms = [];
    if (action.payload.films) {
      action.payload.films.map(f => {
        f = f.replace("http", "https")
        return fetch(f).then(res =>
          res.json().then(data => newFilms.push(data))
        );
      });
    }
    yield put(getFilmsSuccess(newFilms));
  } catch (error) {
    yield put(getFilmsFailure(error));
  }
}

export default function* getPersonSaga() {
  yield takeLatest(GET_PERSON_START, getPerson);
  yield takeLatest(GET_FILMS_START, getFilms);
}
