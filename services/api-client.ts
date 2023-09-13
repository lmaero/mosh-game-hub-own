import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7dc408e03aab48b3b34fcdc8ebefc4eb',
  },
})
