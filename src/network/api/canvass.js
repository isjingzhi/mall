import {http} from '../request'
export function getAuthData () {
  return http.get("/ip")
}