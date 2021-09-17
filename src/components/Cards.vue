<template>
<div class="flex flex-col gap-y-4 w-max border-red-100font-primary font-semibold text-white border-t-2 border-gray-300">
    <h5 class="text-5xl mt-4">{{num}}</h5>
    <p class="text-xl">{{title}}</p>
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
