<template>
    <div>
        <div class="container-fluid">
            <div class="d-inline-block" v-for="item in $store.state.news.slice(0,3)" v-bind:key="item.title" style="width:30%;">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="item.urlToImage" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">
                            <router-link :to="item.title">{{item.title}}</router-link>
                        </h5>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "mostlikednews"
    }
</script>

<style scoped>

</style>