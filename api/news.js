import request from '@/utils/request'

export function articleinfoList(query) {
  return request({
    url: 'api-product/articleinfo/articleinfoList',
    method: 'get',
    params: query
  })
}

export function articleinfoDetail(id) {
  return request({
    url: `api-product/articleinfo/articleinfoDetail?id=${id}`,
    method: 'get'
  })
}

export function searchArticleList(query) {
  return request({
    url: 'api-product/articleinfo/searchArticleList',
    method: 'get',
    params: query
  })
}
