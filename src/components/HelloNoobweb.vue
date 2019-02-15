<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import {get, post} from '@/utils/index'
export default {
  name: 'HelloNoobweb',
  data () {
    return {
      msg: `小白们你们好，又是个新年2019年，小白群成立快有3年之久，来的去的，雾里看花，
      坚持的也坚持下来的，坚持不了的已经不在群里了，不如我们玩玩后台啊，做个官网啊~~~~~~~`
    }
  },
  created () {
    get('/student/getList').then((response)=>{
      console.log(response.data);
    })

    post('http://vue.cc/book/addBookDetails', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }).then((response)=>{
      console.log(response.data);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
