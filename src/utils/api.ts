import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://signsapi.up.railway.app'
})