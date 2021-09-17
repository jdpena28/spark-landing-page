<template>
<section id ="mission" class="flex w-full bg-background text-white">
    <div class="container mx-32 my-auto grid grid-cols-10 gap-x-8">
        <h4 class="font-primary text-lg col-span-3"><i>Our Mission</i></h4> 
        <div class="col-start-4 col-span-8 text-3xl font-light">
            <p>Our mission is simple. Sparkling solution for leaders to ignite their
                business through pattern identification and metrics, and honing inherent strengths.   
            </p>
            <div class="grid grid-cols-7 gap-20 mt-24">
                <Card class="col-start-1 col-span-3" num = "01" 
                title = "Our voice is clear, 
                        straight forward, and professional."
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate architecto harum magnam fugit quasi vero?"/>
                
                
                <Card class="col-start-4 col-span-3" num = "02" 
                title = "Our voice is clear, 
                        straight forward, and professional."
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate architecto harum magnam fugit quasi vero?"/>     
                
                <Card class="col-start-1 col-span-3" num = "03" 
                title = "Our voice is clear, 
                        straight forward, and professional."
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate architecto harum magnam fugit quasi vero?"/>
            
                <Card class="col-start-4 col-span-3" num = "FAQ" 
                title = "Our voice is clear, 
                        straight forward, and professional."
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate architecto harum magnam fugit quasi vero?"/>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
    #mission {
        height: 180vh
    }
</style>


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
