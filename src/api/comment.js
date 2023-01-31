import {service, transformGetData} from '@/utils/request'

export function queryCommentsTree(postId) {
  return service({
    url: 'api/front/comment/queryCommentsTree/'+postId,
    method: 'get'
  })
}
export function like(data) {
  return service({
    url: 'api/front/comment/like',
    method: 'post',
    data
  })
}
export function add(data) {
  return service({
    url: 'api/front/comment',
    method: 'post',
    data
  })
}
export function del(data) {
  return service({
    url: 'api/front/comment',
    method: 'delete',
    data
  })
}
export default {queryCommentsTree,like,add,del}
