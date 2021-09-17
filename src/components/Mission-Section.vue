<template>
<section class="flex w-full h-screen bg-background text-white">
    <div class="container pb-36 mx-32 grid grid-cols-10 gap-x-8">
        <h4 class="font-primary text-lg col-span-3"><i>Our Mission</i></h4> 
        <div class="col-start-4 col-span-8 text-3xl font-light">
            <p>Our mission is simple. Sparkling solution for leaders to ignite their
                business through pattern identification and metrics, and honing inherent strengths.   
            </p>
            <Card num = "01" 
            title = "Our voice is clear, straight forward, and professional."
            text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate architecto harum magnam fugit quasi vero?"/>     
        </div>
    </div>
</section>
</template>


<script lang="ts">
import Card from "./Cards.vue"

export default({
    name: 'Mission',
    props:[],
    components: {Card},
    data () {
       return {

       }
    }
})
</script>
