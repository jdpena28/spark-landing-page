<template>
<!--this is the root component of Vue -->
<section class = "h-screen w-full">
<Form />
</section>

</template>

<script lang = 'ts'>
import Form from './components/Form.vue' // all component to be imported here

export default {
    name: 'App', /* app component name */
    components: {Form}, /* component to be imported inside the app */
    data () {
        return {
            /* all data inserted in the component */
        }
    }
}

</script>