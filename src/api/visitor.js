import {service} from '@/utils/request'
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
        window.localStorage.setItem("huang-blog-temp-visitor",JSON.stringify(data));
      }
    })
  } catch (e) {
  }
}

if(!obj){
  createVisitor()
}
