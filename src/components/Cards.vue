<template>
<div class="flex flex-col gap-y-4 w-full font-primary font-semibold text-white border-t-2 border-gray-300">
    <h5 class="font-serif font-extralight text-8xl mt-4 mb-4">{{num}}</h5>
    <p class="text-xl whitespace-pre-line">{{title}}</p>
    <p class="text-sm font-light">{{text}}</p>
</div>
</template> 

<script lang="ts">
export default ({
    name: 'Card',
    props: {
        num: String,
        title: String,
        text: String,
    },
    data () {

    },
})
</script>
