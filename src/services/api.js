import axios from 'axios'
import Path from '../constants/Path'

const apiProtifolio = axios.create({ baseURL: Path.urlApi })

apiProtifolio.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('portifolio:userData')
  const token = userData && JSON.parse(userData).token

  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default apiProtifolio
