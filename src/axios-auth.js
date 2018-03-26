import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:54978'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance