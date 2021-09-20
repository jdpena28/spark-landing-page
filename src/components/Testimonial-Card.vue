<template>
    <div class="font-primary border-t-1 border-gray-400 w-max">
        <p class="text-lg">A few words from our<br>recent clients</p>
        <div class="mt-5 flex gap-x-4">
            <img :src = "src_picture" :alt = "alt_picture" width= "75" height="75"/>
            <div>
                <h5>Edmonton Bloomberg</h5>
                <p class="font-light">Sparkling impactful solution for <br> leader to ignite their business</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
 img {
     border-radius: 50%;
 }
</style>

<script>
export default ({
    name: 'TestimonialCard',
    props: [
        'src_picture',
        'alt_picture',
    ],
    data () {
        return {
        }
        
    },
})
</script>
