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

export default {category, list, detail}
