<template>
<!--this is the root component of Vue -->
<div class = 'flex'>
<Sidebar/>  
    <div>
        <Hero/>
        <Overview/>
        <Testimonial/>
        <Mission/>
        <Mission2/>
        <Request/>
        <Footer/>
    </div>
</div>
</template>



<script lang = 'ts'>
import Sidebar from "./components/Sidebar.vue"
import Hero from "./components/Hero-Section.vue"
import Overview from "./components/Overview-Section.vue"
import Testimonial from "./components/Testimonial-Section.vue"
import Mission from "./components/Mission-Section.vue"
import Mission2 from "./components/Mission2-Section.vue"
import Request from "./components/Request.vue"
import Footer from "./components/Footer.vue"

export default {
    name: 'App', /* app component name */
    components: {Sidebar,Hero,Overview,Testimonial,
                Mission,Mission2,Request,Footer}, /* component to be imported inside the app */
    data () {
        return {
            /* all data inserted in the component */
        }
    }
}
</script>