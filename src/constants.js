// API
const API_BASE = 'https://musicbrainz.org/ws/2/'
export const API_ALBUM = (name) => `${API_BASE}release?query=${name}`