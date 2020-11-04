<template>
    <div>
        <slider animation="fade">
            <slider-item v-for="item in $store.state.news.slice(0,5)" :key="item.title" id="item" >
                <img :src="item.urlToImage" :alt="item.title">
                <div class="centered">{{item.title}}</div>
                <div class="btn btn-light" id="readmore_btn">
                    <router-link :to="item.title" id="readmore_text">
                        Read more
                    </router-link>
                </div>
            </slider-item>
        </slider>
        <router-view/>
    </div>
</template>

<script>
    import EasySlider from "vue-easy-slider";
    import Vue from 'vue'
    Vue.use(EasySlider);
    export default {
        name: "homenews"
    }
</script>

<style scoped>
        h1{
            color:black;
        }
        .centered {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color:white;
            font-family: 'PT Serif', serif;
            font-size:25px;
            text-shadow: 1px 1px 2px black, 0 0 25px black, 0 0 5px black;
        }
        #readmore_btn{
            position: absolute;
            top: 50%;
            left: 52%;
            transform: translate(-80%, 250%);
            padding:2px;
            font-size:15px;
        }
        #readmore_text{
            color:black;
            text-decoration: none;
        }
        #readmore_text:hover{
            color:black;
            text-decoration: none;
        }
</style>