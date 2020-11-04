<template>
    <div>
        <h3></h3>
    </div>
</template>

<script>
    export default {
        name: "results",
        data(){
            return{
                search_results:'',
                merx:this.$store.state.search_keyword,
            }
        },
    }
</script>

<style scoped>

</style>