<template>
    <div>
        <!-- Footer -->
        <footer class="page-footer font-small bg-primary pt-4 mt-5">

            <!-- Footer Links -->
            <div class="container-fluid text-center text-md-left">

                <!-- Grid row -->
                <div class="row">

                    <!-- Grid column -->
                    <div class="col-md-6 mt-md-0 mt-3">

                        <!-- Content -->
                        <h5 class=" text-white" style="font-weight: bold;">The first for the latest news!</h5>
                        <p class="text-white">Our portal ensures to bring the latest news from all around the world.\
                        Every article that is published here it has its own copyright content. To copy or edit any of the
                        articles you must get permissions from our team!</p>

                    </div>
                    <!-- Grid column -->

                    <hr class="clearfix w-100 d-md-none pb-3">

                    <!-- Grid column -->
                    <div class="col-md-3 mb-md-0 mb-3">

                        <!-- Links -->
                        <h5 class=" text-white">Links</h5>

                        <ul class="list-unstyled">
                            <li>
                                <router-link to="/" class="text-white">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/flashnews" class="text-white">Flash News</router-link>
                            </li>
                            <li>
                                <router-link to="/magazine" class="text-white">Magazine</router-link>
                            </li>
                            <li>
                                <router-link to="/sports" class="text-white">Sports</router-link>
                            </li>
                        </ul>

                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 mb-md-0 mb-3">

                        <!-- Links -->
                        <h5 class="text-white">Contact us:</h5>

                       <div>
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5796728.355673636!2d-94.05922897006668!3d44.81272709126626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52a8f40f9384e3af%3A0xf2d5d5b8f88649d6!2sWisconsin%2C%20USA!5e0!3m2!1sen!2smk!4v1604439375069!5m2!1sen!2smk"
                                   width="200" height="150" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                       </div>

                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row -->

            </div>
            <!-- Footer Links -->

            <!-- Copyright -->
            <div class="footer-copyright text-center py-3 text-white" id="f">© 2020 Copyright:
                <a href="https://gazetapress.buzz" class="text-white"> www.news-live.com</a>
            </div>
            <!-- Copyright -->

        </footer>
        <!-- Footer -->

    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    #f{
        background-color: rgba(0,0,0,0.15); /* Black background with opacity */
    }

</style>