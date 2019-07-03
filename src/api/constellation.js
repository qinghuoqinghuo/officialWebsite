import request from '@/utils/request'
export function getConstellationDetail(query) {
  return request({
    url: 'http://web.juhe.cn:8080/constellation/getAll',
    params: query
  })
}
