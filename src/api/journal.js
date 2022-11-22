import {service} from '@/utils/request'
import {category, detail} from "@/api/post";

export function list(data) {
  return service({
    url: 'api/front/journal/list',
    method: 'post',
    data
  })
}

export default {list}
