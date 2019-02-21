<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
import {get, post} from '@/utils/index.js'
import api from '@/api/icanbb.js'
export default {
    data () {
        return {
            msg: 'I can BB'
        }
    },
    mounted () {
        get(`${api.sgetList}`).then(res=>{
            console.log(res)
        })
    }
}
</script>
