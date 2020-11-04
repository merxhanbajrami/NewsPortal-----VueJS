<template>
  <div id="app">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/Header";
  import VueRouter from 'vue-router';
  import Footer from "/Users/macbookpro/Desktop/Bootcamp2020/portalvue/src/components/footer.vue"
  import Vue from 'vue';
  Vue.use(VueRouter);
  export default {
    name: 'App',
    data(){
      return{
        news:undefined,
      }
    },
    components: {
      Header,
      Footer
    },
    created(){
      this.$store.dispatch('loadNewsData')
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
