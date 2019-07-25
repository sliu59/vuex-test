<template>
<div style="border: 1px solid grey">
  这里是子组件
  <p>{{msg}}</p>
  <button @click="sendToFather">点击传到父组件</button>
  </div>
</template>
<script>
export default {
  // 父组件通过props属性传递进来的数据
  props: ['msg'],
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
  }
}
</script>
