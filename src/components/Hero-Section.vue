<template>
 <div class="flex">
      <Sidebar/>
      <section id="hero" class="flex-1 flex h-screen w-full bg-black pt-6">
          <div class="container mx-20 grid grid-cols-10 gap-x-8">
            <img src="../assets/spark.png" alt="Spark Logo" class = "col-span-2 -mt-10 -ml-11">
            <div class="col-start-4 col-span-8 flex gap-5">
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
            </div>
            <div class="col-span-10 grid grid-cols-10 gap-8 place-content-start">
                <div class="col-start-1 col-span-3 self-end">
                    <Button class ="bg-yellow-300 text-black mb-4" btn = "Service Offered"/>
                    <Button class ="text-white border-white border-2" btn = "Request a Quote"/>
                </div>
                <div class="col-start-4 col-span-8 font-primary font-extrabold text-9xl">
                    <h3 class="text-white">Make</h3>
                    <h3 class="bg-yellow-400 w-3/4">Leaders</h3>
                    <p class="text-white text-xl mt-3 w-4/5 border-b-2 border-yellow-400 pb-2"><i>Consulting made to help leaders like you pursue success.</i></p>
                </div>
            </div>
        </div>
      </section>
 </div>
</template>


<script>
import Principles from "./Principles.vue"
import Sidebar from "./Sidebar.vue"
import Button from "./Button.vue"

export default ({
    name: "Hero-Section",
    props: [],
    components: {Sidebar,Principles,Button},
    data () {
        return {

        }
    },
})
</script>
