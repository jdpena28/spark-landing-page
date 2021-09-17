<template>
<section id ="mission2" class="flex flex-wrap w-full bg-yellow-400 font-bold">
    <div class="container mx-32 my-auto grid grid-cols-10 gap-x-8">
        <h4 class="font-primary text-lg col-span-3"><i>Our Mission</i></h4> 
        <div class="col-start-4 col-span-8 text-3xl font-normal">
            <p>Our mission is simple. Sparkling solution for leaders to ignite their
                business through pattern identification and metrics, and honing inherent strengths.   
            </p>
            <div class="grid grid-cols-7 gap-20 mt-24">
                <img src="../assets/Google-Logo.png" alt="google logo" class="col-span-2">
                <img src="../assets/Sony_logo.png" alt="sony logo" class="col-span-2"> 
                <img src="../assets/Coca-Cola_Logo.png" alt="google logo" class="col-span-2">
                <img src="../assets/Dropbox_logo.png" alt="dropbox logo" class="col-span-2">
                <img src="../assets/Spotify_Logo.png" alt="spotify logo" class="col-span-2"> 
                <img src="../assets/FedEx_Logo.png" alt="fedex logo" class="col-span-3">
                <Button class="border-1 border-black text-lg font-semibold" btn = "View Case Studies"/>
            </div>
        </div>
    </div>
     <p id ="wrap-text" class="font-bold text-8xl col-span-11">We are modern, firm,an</p>
</section> 
</template>

<style scoped>
    #mission2 {
        height:140vh;

    }
    #wrap-text {
        text-transform: uppercase;
    }
</style>

<script>
import Button from "./Button.vue"

export default ({
    name: 'Mission2',
    props: {

    },
    components:{Button},
    data () {
        return {

        }
    },
})
</script>
