<template>
    <div class="font-primary">
        <h4>{{message}}</h4>
        <div>
            <img :src=src_picture>
        </div>
    </div>
</template>

<script lang="ts">
export default ({
    name: 'testimonialCard',
    props: {
        src_picture: String
    },
    data () {
        
    },
})
</script>
