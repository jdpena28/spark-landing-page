<template>
    <div class="flex flex-col gap-2 font-primary text-sm w-full text-white border-t-2 border-gray-300 ">
        <p class="font-bold mt-2">{{principles}}</p>
        <p class="font-extralight">{{phrase}}</p>
        <p>{{num}}</p>
    </div>
</template>

<script lang="ts">
export default({
    name: 'Principles',
    props:['principles','phrase','num'],
    data () {
       return {

       }
    }
})
</script>
