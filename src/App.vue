<template>
<!--this is the root component of Vue -->
<div class = "flex">
    <Sidebar/>
     <section id='hero' class = "flex-1 bg-black">
      <div class="flex container mx-auto justify-center">
        <img src="./assets/spark.png" alt="Spark Logo" class="self-start" width="240">
        <Principles principles = "Our Vision"
            phrase = "Sparking impactful solution for leaders to ignite their business."
            num = "01"/>
        <Principles principles = "Our Way"
            phrase = "Pattern identification and metrics and honing inherent strength."
            num = "02"/>
        <Principles principles = "Our Values"
            phrase = "An attentive partner a seasoned advisor, impactfully discerning."
            num = "03"/>
        <Principles principles = "Our People"
            phrase = "Our voice is clear, straightforward and professional."
            num = "04"/>
      </div>
    </section> 
</div>
</template>



<script lang = 'ts'>
import Sidebar from "./components/Sidebar.vue"// all component to be imported here
import Principles from "./components/Principles.vue"

export default {
    name: 'App', /* app component name */
    components: {Sidebar,Principles}, /* component to be imported inside the app */
    data () {
        return {
            /* all data inserted in the component */
        }
    }
}

</script>