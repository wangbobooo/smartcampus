<template>
  <mt-tabbar fixed v-model="selected">
    <mt-tab-item id="1">
      <img slot="icon" src="../assets/logo.png">
      外卖
    </mt-tab-item>
    <mt-tab-item id="2">
      <img slot="icon" src="../assets/logo.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="3">
      <img slot="icon" src="../assets/logo.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="4">
      <img slot="icon" src="../assets/logo.png">
        我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
  export default {
    data() {
      return {
        selected:'4'
      }
    },
    watch: {
      selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定
       if(val == "4"){

       }

      }
    }
  }
</script>

