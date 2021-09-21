<template>
<section class="flex h-auto w-full bg-white">
    <div class="container mx-36 grid grid-cols-10 gap-x-8">
        <div class="col-span-5 font-primary font-medium flex flex-col justify-around">
            <div>
                <h3 class="text-6xl">We help spark solutions</h3>
                <h3 class="text-6xl bg-yellow-400 w-max p-2"><i>for leaders</i></h3>
            </div>                          
                                        <!-- fixed the folder here -->
            <TestimonialCard src_picture = "https://images.unsplash.com/photo-1542909168-6296a31d7689?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt_picture = 'Portait photo'/>
        </div>
        <div class="col-start-6 col-span-5">
            <img src="../assets/cool+guy.png" alt="Man wearing suits">
        </div>
    </div>
    </section>
</template>

<script>
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
