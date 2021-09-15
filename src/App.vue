<template>
<!--this is the root component of Vue -->
<Hero/>
</template>



<script lang = 'ts'>
import Hero from "./components/Hero-Section.vue"

export default {
    name: 'App', /* app component name */
    components: {Hero}, /* component to be imported inside the app */
    data () {
        return {
            principleClass: 'col-start-3'
            /* all data inserted in the component */
        }
    }
}

</script>