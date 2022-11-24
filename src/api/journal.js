import {service, transformGetData} from '@/utils/request'

export function list(data) {
  return service({
    url: 'api/front/journal/list',
    method: 'post',
    data
  })
}
export function like(data) {
  return service({
    url: 'api/front/journal/like',
    method: 'post',
    data
  })
}

export default {list,like}
