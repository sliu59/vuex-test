<template>
  <div>
    <div>HelloWorld{{fromson}}</div>
    <son :msg="msg" @getFromson="fatherGet"></son>
    <brother></brother>
  </div>

</template>
<script>
import Son from './son.vue'
import Brother from './brother'

export default {
  components: {
    son: Son,
    brother: Brother
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
