import axios from 'axios'
import { API_ALBUM } from './constants';

export default async function albumsProvider(name) {
  let response
  try {
    response = await axios.get(API_ALBUM(name))
  } catch (error) {
    throw new Error(error)
  }

  return response.data.releases
}