<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/">
                <img alt="logo" src="../assets/logo.png" width="100" height="50">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse ml-4" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link" id="selected">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link to="/flashnews" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Flash news
                        </router-link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Covid news</a>
                            <div class="dropdown-divider"></div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/flashnews/covidnews" class="nav-link">Covid news</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/magazine" class="nav-link">Magazine</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/sports" class="nav-link">Sports</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-outline-danger mr-4">
                        <router-link to="/report" style="text-decoration: none; color:black">Report a case!</router-link>
                    </button>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                    v-model="keyword_var">
                    <button class="btn btn-outline-primary my-2 my-sm-0"
                            type="submit"><router-link to="/results">Search</router-link></button>
                </form>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                keyword_var:this.$store.state.search_keyword,
            }
        },
        methods:{
        }
    }
</script>

<style scoped>
    li {
        padding: 3px;
    }
    .nav-link{
        color:darkblue;
    }
    #selected{

    }
</style>