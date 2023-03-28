// 请求的接口方法
import axios from 'axios'

import base from './base'


// 请求方法
const api={
    // 宠物信息获取
    getcatinfo(){
        return axios.get(base.host+base.cat)

    },//如果有的话继续写第二个
    getdoginfo(){
        return axios.get(base.host+base.dog)

    },
    getclimbinfo(){
        return axios.get(base.host+base.climb)

    },
    getlittlepetinfo(){
        return axios.get(base.host+base.littlepet)

    },
    getfishinfo(){
        return axios.get(base.host+base.fish)

    }
}

export default api