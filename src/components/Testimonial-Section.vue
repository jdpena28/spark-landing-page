<template>
<section class="flex h-auto w-full bg-white">
    <div class="container mx-36 grid grid-cols-10 gap-x-8">
        <div class="col-span-5 font-primary font-medium flex flex-col justify-around">
            <div>
                <h3 class="text-6xl">We help spark solutions</h3>
                <h3 class="text-6xl bg-yellow-400 w-max p-2"><i>for leaders</i></h3>
            </div>                          
                                        <!-- fixed the folder here -->
            <TestimonialCard src_picture = 'src\assets\portrait.jpg' 
            alt_picture = 'Portait photo'/>
        </div>
        <div class="col-start-6 col-span-5">
            <img src="../assets/cool+guy.png" alt="Man wearing suits">
        </div>
    </div>
    </section>
</template>

<script lang="ts">
import TestimonialCard from "./Testimonial-Card.vue"


export default ({
    name: 'Testimonial',
    components: {TestimonialCard},
    data () {
        return {

        }
    },
})
</script>
