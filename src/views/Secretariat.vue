<template>
    <div>
        <div class="hstack w-full bg-hero-gray py-64">
            <div class="container md:px-36">
                <div class="vstack space-48 mx-18 align-center">
                    <div class="text-40 title md:text-64 text-center" style="font-weight: 500;">The Secretariat</div>
                    <div class="vstack space-14 ">
                        <!-- add align-start here -->
                        <div class="text-20 weight-400  text-justify" style="line-height: 1.2;">Stay tuned to find out the team that helms this year’s edition of DHAP!</div>
                        <!-- add w-full here -->
                    </div>
                </div>
            </div>
        </div>
    
        <div class="">
            <div class="container">
                <div class="vstack mb-48 mx-18">
    
                    <div class="vstack mt-128 mx-18 space-64 md:px-128">
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18">
                            <div class="w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-48 mt-16 w-full lg:pl-128">
                                <div class="w-128 h-20 bg-gray-300 rounded-full"></div>
                                <div class="vstack space-14 align-start">
                                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18">
    
                            <div class="unhidden lg:hidden w-full lg:w-512 bg-gray-400 h-448 mb-16"></div>
    
                            <div class="vstack align-start lg:align-end space-48 lg:mt-16 w-full lg:pr-128">
                                <div class="w-128 h-20 bg-gray-300 rounded-full"></div>
                                <div class="vstack space-14 align-start">
                                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                </div>
                            </div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="hidden lg:unhidden w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>
                        </div>
    
                        <div v-scroll-reveal class="vstack lg:hstack w-full mx-18">
                            <div class="w-full lg:w-512 bg-gray-400 h-320 mb-16"></div>
                            <div class="hidden lg:unhidden spacer"></div>
                            <div class="vstack align-start space-48 mt-16 w-full lg:pl-128">
                                <div class="w-128 h-20 bg-gray-300 rounded-full"></div>
                                <div class="vstack space-14 align-start">
                                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                    <div class="w-full h-20 bg-gray-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
    
                    </div>
    
                </div>
    
                <hr>
    
                <Footer />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
import Footer from '../components/Footer'
export default {
    components: {
        Footer
    }
}
</script>
