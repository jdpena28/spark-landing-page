<template>
<!--this is the root component of Vue -->
<div class = 'flex'>
<Sidebar class = "fixed l-0 t-0"/>  
    <div>
        <Hero/>
        <Overview/>
        <Testimonial/>
    </div>
</div>
</template>



<script lang = 'ts'>
import Sidebar from "./components/Sidebar.vue"
import Hero from "./components/Hero-Section.vue"
import Overview from "./components/Overview-Section.vue"
import Testimonial from "./components/Testimonial-Section.vue"

export default {
    name: 'App', /* app component name */
    components: {Sidebar,Hero,Overview,Testimonial}, /* component to be imported inside the app */
    data () {
        return {
            /* all data inserted in the component */
        }
    }
}

</script>