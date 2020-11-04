<template>
    <div>
       <div class="container">
           <h3 class="col-2">Të fundit</h3>
           <homenews/>
       </div>
        <div class="container-fluid bg-light mst-5">
            <h3 class="text-danger p-3">Featured stories</h3>
        </div>
       <div class="container d-flex justify-content-between" style="width:100%;" >
               <div class="col-4" v-for="item in $store.state.news.slice(3,6)" v-bind:key="item.title">
                   <div class="card">
                       <img class="card-img-top" :src="item.urlToImage" :alt="item.title">
                       <div class="card-body">
                           <h5 class="card-title">{{item.title}}</h5>
                           <p class="card-text">{{item.description.substring(0,160)+"..."}} <br></p>
                           <div class="btn btn-outline-primary" id="readmore_btn">
                               <router-link :to="item.title" id="readmore_text">
                                   Read more
                               </router-link>
                           </div>
                       </div>
                   </div>
               </div>
       </div>
        <!-- Report campaign -->
        <div class="container-fluid bg-danger p-3 mt-3">
                <div class="container">
                    <div class="row" id="campaign">
                        <div class="col-sm-12 col-md-12 col-lg-6 text-white">
                            <h2 id="txtCampaign">This awareness raising video has been produced by KOMF, in frame of the National Week for the Protection of Children Victims of Violence and Abuse.
                                Violence against Children Destroys the Future<br>
                                <span style="font-weight: bold; font-size:25px;" class="mt-3"> Protect the Future! </span>
                            </h2>
                            <button id="last-button" class="btn btn-light text-danger">
                                <router-link to="/report">Report here</router-link>
                            </button>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/i_COBu65h88" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
            </div>
        </div>
        <!-- select category news -->
        <div class="container-fluid mt-4 bg-light p-3">
            <a class="m-4 text-danger" v-on:click="currentTabComponent='mostreadnews'"
               style="text-decoration: none; font-size: 25px;">Most read news</a>
            <a class="m-4 text-danger" v-on:click="currentTabComponent='mostlikednews'"
            style="text-decoration: none; font-size: 25px;">Most liked news</a>
        </div>
        <component v-bind:is="currentTabComponent"></component>


    </div>
</template>

<script>
    import homenews from "../components/homenews";
    import mostreadnews from '/Users/macbookpro/Desktop/Bootcamp2020/portalvue/src/views/mostlikednews.vue';
    import mostlikednews from '/Users/macbookpro/Desktop/Bootcamp2020/portalvue/src/views/mostreadnews.vue';
    import VueRouter from 'vue-router'
    import Vue from 'vue'
    Vue.use(VueRouter);
    export default {
        name: "Home",
        components:{
            homenews,
            'mostreadnews':mostreadnews,
            'mostlikednews':mostlikednews,
        },
        data(){
            return{
                currentTabComponent: 'mostreadnews'
            }
        }
    }
</script>

<style scoped>
        h5{
            font-size:15px;
        }
        .card-text{
            font-size:13px;
        }
        #readmore_btn{
            color:black;
            font-size:12px;
            padding:3px;
            text-decoration: none;
        }
        #readmore_text{
            color:blue;
            text-decoration: none;
        }
        #readmore_text:hover{
            color:white;
        }
        #txtCampaign{
            color:white;
            font-size:18px;
        }
</style>