import {service} from '@/utils/request'
import store from '../store'
debugger
//创建临时游客
let obj = window.localStorage.getItem("huang-blog-temp-visitor");
let createVisitor = function() {
  try {
    service({
      url: 'api/front/visitor/c',
      method: 'get'
    }).then(response => {
      if(response.code === 1){
        let data = response.data
        store.dispatch('user/setUser',data);
        window.localStorage.setItem("huang-blog-temp-visitor",response.data);
      }
    })
  } catch (e) {
  }
}

if(obj){
  store.dispatch('user/setUser',obj)
}else {
  createVisitor()
}
