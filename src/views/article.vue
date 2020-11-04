<template>
    <div>
        <div class="container mt-4" id="box">
            <div class="row">
                <div class="col-4">
                    <img src="../assets/logo.png" :alt="my_article.title" width="200" height="100">
                    <p class="text-black mt-4">Article published by:
                        <br/>
                        <span id="newspaper">{{my_article.source.name}}</span>
                    </p>
                    <p class="text-black mt-3">Author:
                        <br/>
                        <span id="authortext">{{my_article.author}}</span>
                    </p>
                    <p class="text-black mt-3">
                        Published date:
                        <br/>
                        <span id="datepublished" class="bg-primary">{{my_article.publishedAt}}</span>
                    </p>
                </div>
                <div class="col-8">
                    <div class="container">
                        <h3 id="title">{{my_article.title}}</h3>
                        <img :src="my_article.urlToImage" width="100%" height="50%">
                        <p class="mt-3">
                            {{my_article.content}}
                        </p>
                        <br>
                        <p id="fullnews">
                            Read the full article in the link below: <br>
                            <a :href="my_article" style="font-size:15px;">{{my_article.url}}</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-12 bg-danger">
                    <router-link to="/flashnews">
                        <span class="text-white p-5 m-4" style="font-size:20px; font-weight: bold">Read more articles</span>
                    </router-link>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "article",
        data(){
            return{
                my_article:'',
                article_title:'',
            }
        },
        created() {
            this.article_title=this.$route.params.title;
            this.my_article=this.$store.state.news.filter(a => a.title === this.article_title)[0];
        }
    }
</script>

<style scoped>
    #box{
        box-shadow: 10px 10px 8px #888888;
    }
    #authortext, #newspaper{
        font-weight: bold;
    }
    p{
        font-size:20px;
    }
    #datepublished{
        color:white;
        font-weight:bold;
    }
    #title{
        font-weight:bold;
    }
    #fullnews{
        font-weight: bold;
        width:100%;
    }
</style>