<template>
<section id ="Request" class="flex h-screen flex-wrap w-full font-bold font-primary">
    <div class="container mx-32 my-auto grid grid-cols-10 gap-x-8">
        <h4 class="text-lg col-span-3"><i class="pb-1 border-b-2 border-yellow-400">Next - Start session</i></h4> 
        <div class="col-start-4 col-span-8 text-3xl font-normal">
            <p class="text-8xl font-bold">Be the<br>World's Best <br> Boss.</p>
            <div class="grid grid-cols-7 gap-20 mt-12">
                <Button class="bg-yellow-400 col-span-2" btn = "Service Offered"/>
                <Button class="border-2 border-black col-span-2" btn = "Request a Quote"/>
                <a href="#"><p id="email" class="font-serif text-lg font-extrabold">hello@spark.com</p></a>
            </div>
        </div>
    </div>
</section> 
</template>

<style scoped>
    #email {
       line-height: 4.2rem;
       text-decoration: underline
    }
</style>


<script lang="ts">
import Button from "./Button.vue"

export default ({
    name: 'Request',
    components:{Button},
    data () {
        return {

        }
    },
})
</script>
