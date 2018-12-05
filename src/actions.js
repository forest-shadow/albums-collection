import albumsProvider from './providers'

export function loadAlbumsSuccess(albums) {
  return {
    type: 'ALBUMS_LOAD_SUCCESS',
    albums
  }
}

export function loadAlbums(name) {
  return dispatch => {
    return albumsProvider(name)
      .then(albums => {
        dispatch(loadAlbumsSuccess(albums))
      })
      .catch(error => {
        throw Error(error)
      }
    )
  }
}