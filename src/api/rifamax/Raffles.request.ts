import { IGetRaffles } from '@interfaces/requests.interfaces'
import axios from 'axios'

// GET /rifamax/raffles
export const getRaffles = ({ token, queryType, page, items }: IGetRaffles) => {
  return axios.get(`${import.meta.env.VITE_X100_URL_BASE}/rifamax/raffles/${queryType}?page=${page}&items=${items}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}