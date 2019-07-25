<template>
  <div>
    <div>HelloWorld{{fromson}}</div>
    <son :msg="msg" @getFromson="fatherGet"></son>
  </div>

</template>
<script>
import Son from './son.vue'

export default {
  components: {
    son: Son
  },
  data () {
    return {
      msg: '儿子你好啊',
      fromson: ''
    }
  },
  methods: {
    fatherGet (data) {
      this.fromson = data
    }
  }
}
</script>
