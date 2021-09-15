<template>
    <div class="flex flex-col gap-2 col-span-2 font-primary text-sm w-48 text-white ">
        <p class="font-bold">{{principles}}</p>
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
