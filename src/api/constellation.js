import request from '@/utils/request'
export function getConstellationDetail(query) {
  return request({
    url: '/constellation/getAll',
    params: query
  })
}
