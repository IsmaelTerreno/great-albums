export const FETCH_ALBUM_IMAGES = "FETCH_ALBUM_IMAGES";
export const FETCH_ALBUM_IMAGES_SUCCESS = "FETCH_ALBUM_IMAGES_SUCCESS";
export const FETCH_ALBUM_IMAGES_ERROR = "FETCH_ALBUM_IMAGES_ERROR";

export function findAlbumImages() {
  return {
    type: FETCH_ALBUM_IMAGES
  };
}
