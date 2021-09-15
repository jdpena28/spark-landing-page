<template>
<!--this is the root component of Vue -->
<div class = "flex">
    <Sidebar/>
     <section id='hero' class = "flex-1 h-screen w-full bg-black pt-6">
      <div class="container mx-auto grid grid-cols-10 gap-5 place-items-end">
        <img src="./assets/spark.png" alt="Spark Logo" class = "col-span-2 -mt-12 place-self-start" width="240">
        <Principles :class = "principleClass"
            principles = "Our Vision"
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
        <Button class ="bg-yellow-300 text-black" btn = "Service Offered"/>
        <Button class ="text-white border-white border-2" btn = "Service Offered"/>
      </div>
    </section> 
</div>
</template>



<script lang = 'ts'>
import Sidebar from "./components/Sidebar.vue"// all component to be imported here
import Principles from "./components/Principles.vue"
import Button from "./components/Button.vue"

export default {
    name: 'App', /* app component name */
    components: {Sidebar,Principles,Button}, /* component to be imported inside the app */
    data () {
        return {
            principleClass: 'col-start-3'
            /* all data inserted in the component */
        }
    }
}

</script>