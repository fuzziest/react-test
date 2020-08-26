import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

export function getRandomImage() {
  return {
    type: 'GET_RANDOM_IMAGE',
  };
}

export function deleteImage(id) {
  return {
    type: 'DELETE_IMAGE',
    payload: id,
  };
}

function reducer(
  state = {
    randomImageData: null,
    imageHistory: [],
  },
  action
) {
  switch (action.type) {
    case 'RANDOM_IMAGE_RECEIVED':
      return {
        ...state,
        randomImageData: action.payload,
        imageHistory: [...state.imageHistory, action.payload],
      };
    case 'DELETE_IMAGE':
      return {
        ...state,
        imageHistory: state.imageHistory.filter(
          (item) => item.id !== action.payload
        ),
      };
    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log(store.getState()));
export default store;
