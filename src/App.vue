<template>
<!--this is the root component of Vue -->
<div class = 'flex'>
    <Sidebar/>
    <div>
        <Hero/>
        <Overview/>
    </div>
</div>
</template>



<script lang = 'ts'>
import Sidebar from "./components/Sidebar.vue"
import Hero from "./components/Hero-Section.vue"
import Overview from "./components/Overview-Section.vue"
export default {
    name: 'App', /* app component name */
    components: {Sidebar,Hero,Overview}, /* component to be imported inside the app */
    data () {
        return {
            principleClass: 'col-start-3'
            /* all data inserted in the component */
        }
    }
}

</script>