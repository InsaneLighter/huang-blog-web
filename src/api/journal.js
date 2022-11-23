import {service, transformGetData} from '@/utils/request'

export function list(data) {
  let params = transformGetData(data);
  return service({
    url: 'api/front/journal/list' + params,
    method: 'get'
  })
}

export default {list}
