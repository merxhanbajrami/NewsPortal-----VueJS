import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news:[],
    search_keyword:'',
  },
  mutations: {
  },
  actions: {
    loadNewsData(){
      Vue.axios.get("http://newsapi.org/v2/everything?domains=wsj.com&apiKey=661b09c0077146d39c0593d23e81ba65\n")
          .then((resp)=>{
            this.state.news=resp.data.articles;
            console.log(resp.data.articles);
          }).catch((error)=>{
        console.log(error);
      })
    }
  },
  getters: {
    getCovidNews(){
      return this.state.news.forEach(item => item.title.toUpperCase());
    },
    getFlashNews(){
      return this.state.news.slice(5,10).forEach(article=>article.title.toUpperCase()).toArray();
    },
    getSportsNews(){
      return this.state.news.slice(0,5).forEach(article=>article.title.toUpperCase()).toArray();
    },
    get(){
      return this.state.news.slice(0,10).forEach(article=>article.title.toUpperCase()).toArray();
    }
  }
})
