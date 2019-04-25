import { FETCH_ALBUM_IMAGES_SUCCESS } from "../actions/album";

const initState = [];

export default function(state = initState, action) {
  switch (action.type) {
    case FETCH_ALBUM_IMAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
