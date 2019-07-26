<template>
<div style="border: 1px solid grey">
  这里是子组件
  <p>{{$store.state.father.show}}</p>
  <button @click="sendToFather">点击传到父组件</button>
  <button @click="$store.dispatch('switch_father')">开关</button>
  <div v-if="$store.state.father.show" style="width:100px;height:100px;background-color:yellow"></div>
  <div v-if="$store.getters.no_show" style="width:100px;height:100px;background-color:red"></div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  // 父组件通过props属性传递进来的数据
  props: ['msg'],
  computed: {
    ...mapState({
      show: state => state.father.show
    })
  },
  data () {
    return {
      sonMsg: '我来自子组件'
    }
  },
  methods: {
    // 子组件通过emit方法触发父组件中定义好的函数，从而将子组件中的数据传递给父组件
    sendToFather () {
      this.$emit('getFromson', this.sonMsg)
    }
  },
  created () {
    console.log(this.$store)
  }
}
</script>
