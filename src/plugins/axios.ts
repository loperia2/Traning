import axios, { AxiosError, AxiosResponse } from 'axios'
import { endsWith, get, startsWith, trimEnd, trimStart } from 'lodash'

let apiNameSpace = 'test'
let apiHost = 'deneme'

if (endsWith(apiHost, '/')) {
  apiHost = trimEnd(apiHost, '/')
}

if (startsWith(apiNameSpace, '/')) {
  apiNameSpace = trimStart(apiNameSpace, '/')
}

if (endsWith(apiNameSpace, '/')) {
  apiNameSpace = trimEnd(apiNameSpace, '/')
}

const API_URL = `${apiHost}/${apiNameSpace}`
const axiosConfig = {
  baseURL: API_URL
}

const axiosInstance = axios.create(axiosConfig)

axiosInstance.interceptors.request.use((config) => {
  if (config.url) {
    if (!endsWith(config.url, '/')) {
      config.url = `${config.url}/`
    }
  }
  return config
})

const responseHandler = (response: AxiosResponse) => {
  return response
}

const errorHandler = (error: AxiosError) => {
  /* if (get(error, 'response.status') === 404) {
    const id = get(error, 'response.config.id', 'element')
    alert(i18n.t('404Message', { id: id }))
    // FIXME: Router(useRouter()) can't be used here. Because of that window object used here.
    // FIXME Redirecting to main page on any 404 response is wrong. There can be 404 responses from many different request such as dashboard, showcase items or maps. rel: #tuxr93
    // FIXME commented out in #tuxr.213 rel: tuxr93
    set(window, 'location', '/')
  } else { */
  alert(get(error, 'message'))
  /* }
  return Promise.reject(error) */
}

axiosInstance.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
)

export default axiosInstance
