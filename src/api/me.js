import {service} from '@/utils/request'
import {category, detail, list} from "@/api/post";

export function dayInfo() {
  return service({
    url: 'api/front/me/dayInfo',
    method: 'get'
  })
}

export function images() {
  return service({
    url: 'api/front/me/images',
    method: 'get'
  })
}

export function introduce() {
  return service({
    url: 'api/front/me/introduce',
    method: 'get'
  })
}
export default {dayInfo, images, introduce}
