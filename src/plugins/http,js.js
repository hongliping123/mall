import axios from 'axios'
const MyhttpServer = {}

MyhttpServer.install = (Vue) =>{
  //添加实例方法
  Vue.prototype.$http = axios
}

export default MyhttpServer