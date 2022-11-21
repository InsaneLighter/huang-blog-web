import {service} from '@/utils/request'

export function list(data) {
  return service({
    url: 'api/front/journal/list',
    method: 'post',
    data
  })
}

