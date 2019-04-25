import { takeEvery, all, put, call } from 'redux-saga/effects';
import {FETCH_ALBUM_IMAGES, FETCH_ALBUM_IMAGES_SUCCESS, FETCH_ALBUM_IMAGES_ERROR} from "../actions/album";
import { fetchAlbumImagesApi } from '../../api';

function* fetchAlbumImages() {
    try {
        const albumImages = yield call(fetchAlbumImagesApi);
        yield put({type: FETCH_ALBUM_IMAGES_SUCCESS, payload: albumImages});
    } catch (e) {
        yield put({type: FETCH_ALBUM_IMAGES_ERROR, message: e.message});
    }
}

export function* watchFetchAlbumImages() {
    yield takeEvery(FETCH_ALBUM_IMAGES, fetchAlbumImages)
}

export default function* rootSaga() {
    yield all([
        watchFetchAlbumImages()
    ])
}
