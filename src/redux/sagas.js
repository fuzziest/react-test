import { put, takeEvery, call } from 'redux-saga/effects';

function* watchGetRandomImage() {
  yield takeEvery('GET_RANDOM_IMAGE', fetchRandomImageData);
}

function* fetchRandomImageData() {
  try {
    const url =
      'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';
    const response = yield call(fetch, url);
    const { data } = yield call([response, response.json]);

    const randomImageData = {
      id: data.id,
      title: data.title,
      url: data.images.original.url,
      import_datetime: data.import_datetime,
    };

    yield put({ type: 'RANDOM_IMAGE_RECEIVED', payload: randomImageData });
  } catch (error) {
    // yield put({ type: 'IMAGE_REQUEST_FAILED', error });
    console.error(error.stack);
  }
}

export default watchGetRandomImage;

// export default function* rootSaga() {
//   yield all([watchGetRandomImage()]);
// }
