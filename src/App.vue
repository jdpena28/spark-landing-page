<template>
<!--this is the root component of Vue -->
<Sidebar/>
</template>



<script lang = 'ts'>
import Sidebar from "./components/Sidebar.vue"// all component to be imported here

export default {
    name: 'App', /* app component name */
    components: {Sidebar}, /* component to be imported inside the app */
    data () {
        return {
            /* all data inserted in the component */
        }
    }
}

</script>