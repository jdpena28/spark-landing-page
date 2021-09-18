<template>
      <section id="hero" class="flex h-screen w-full bg-background pt-6">
          <div class="container mx-32 grid grid-cols-10 gap-x-8">
            <img src="../assets/spark.png" alt="Spark Logo"     class = "col-span-2 -mt-10 -ml-11">
            <div class="col-start-4 col-span-8 flex gap-x-5">
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
            <div class="col-span-10 grid grid-cols-10 gap-x-8 place-content-start">
                <div class="col-start-1 col-span-3 self-end">
                    <Button class ="bg-yellow-300 text-black mb-4" btn = "Service Offered"/>
                    <Button class ="text-white border-white border-2" btn = "Request a Quote"/>
                </div>
                <div class="col-start-4 col-span-8 font-primary font-extrabold ">
                    <h3 class="text-white tracking-wide big-text">Make</h3>
                    <h3 class="bg-yellow-400 tracking-wide big-text">Leaders</h3>
                    <p class="text-white text-xl font-normal mt-3 w-max border-b-2 border-yellow-400 pb-2"><i>Consulting made to help leaders like you pursue success.</i></p>
                </div>
            </div>
        </div>
      </section>
      <div id="faq" class="font-serif text-yellow-400">FAQ</div>
</template>

<style scoped>
.big-text {
    font-size: 11rem;
    line-height: 1
}
#faq {
    position:absolute;
    top:1.4rem;
    right:2.4rem;
    height: 50px;
    width: 50px;
    line-height: 2.8;
    text-align: center;
    border-width: 2px;
    border-radius: 50%;

    border-color: rgb(251, 191, 36)
}

</style>


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
