<template>
<section class="flex h-screen w-full bg-white">
    <div class="container mx-36 grid grid-cols-10 gap-x-8">
        <div class="col-span-5 font-primary font-medium text-6xl">
            <div class="flex flex-col">
                <div>
                    <h3>We help spark solutions</h3>
                    <h3 class="bg-yellow-400 w-max p-2"><i>for leaders</i></h3>
                </div>
            </div>
        </div>
        <div class="col-span-5 justify-self-end">
            <img src="../assets/cool+guy.png" width="80%"/>
        </div>
    </div>
    </section>
</template>

<script lang="ts">
import testimonialCard from "./Testimonial-Card.vue"
export default ({
    name: 'Testimonial',
    components: [testimonialCard],
    data () {
        return {

        }
    },
})
</script>
