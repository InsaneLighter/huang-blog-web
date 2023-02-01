import {service} from '@/utils/request'

export function category() {
  return service({
    url: 'api/front/post/category',
    method: 'get'
  })
}

export function list(data) {
  return service({
    url: 'api/front/post/list',
    method: 'post',
    data
  })
}

export function detail(postId) {
  return service({
    url: 'api/front/post/' + postId,
    method: 'get'
  })
}
export function incrVisit(postId) {
  return service({
    url: 'api/front/post/visit/' + postId,
    method: 'get'
  })
}

export function like(data) {
  return service({
    url: 'api/front/post/like',
    method: 'post',
    data
  })
}
export default {category, list, detail, incrVisit,like }
