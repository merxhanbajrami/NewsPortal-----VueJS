<template>
    <div>
        <div class="container d-inline-block" >
            <div class="row mt-4" id="box" v-for="item in this.$store.state.news" v-bind:key="item.title">
                <div class="col-4" >
                    <img :src="item.urlToImage" :alt="item.title" width="300" height="200">
                </div>
                <div class="col-8">
                    <h3 class="text-black mt-3 " style="font-size:20px;font-weight: bold; text-align:left;">{{item.title}}</h3>
                    <p class="text-dark mt-3" style="font-size: 15px;font-weight: bold;">
                        {{item.content}}
                    </p>
                    <div class="btn btn-outline-light" id="readmore_btn">
                        <router-link :to="item.title" id="readmore_text">
                            Read more
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "listnews",
        data(){
            return{
                my_news:[],
            }
        },
        created() {
            this.my_news=this.$store.dispatch('getFlashNews');
        }
    }
</script>

<style scoped>
    #box{
        box-shadow: 10px 10px 8px #888888;
    }
    #readmore_btn{
        padding-left:10px;
        padding-right:10px;
        padding-top:2px;
        padding-bottom: 2px;

    }
    #readmore_text{
        font-size: 13px;
    }
</style>