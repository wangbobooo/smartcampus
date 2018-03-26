<template>
  <div id="app">
    <v-header :title="title"></v-header>
    <!-- tab-container -->
   <div class="content">
      <router-view>

      </router-view>

   </div>

    <v-footer></v-footer>
  </div>
</template>

<script>
import footer from './components/footer'
import header from './components/header'
export default {
  name: 'app',
  components: {
    'v-footer': footer,
    'v-header': header,
  },
  data () {
    return {
    }
  },
  computed: {
    title () {
      switch (this.$route.path.split('/')[1]) {

        case 'user':
          return "我的"
      }
    }
  }
}
</script>

<style lang="scss">
.content{
  margin-top: 40px;
  overflow: auto;
  height: 100%;
  padding-bottom: 55px;
}
</style>
