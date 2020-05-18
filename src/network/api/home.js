import http from '../request'

export const getHomeMultidata = () => {
  return http({
    method: 'get',
    url: '/home/multidata'
  })
}


export const getHomeData = (type, page) => {
  return http({
    method: 'get',
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
