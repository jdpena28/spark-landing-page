<template>
    <div class="flex flex-col gap-y-2 font-primary text-sm w-full h-0 text-white border-t-1 border-gray-500 ">
        <p class="font-bold pt-1">{{principles}}</p>
        <p class="font-extralight">{{phrase}}</p>
        <p>{{num}}</p>
    </div>
</template>

<script>
export default({
    name: 'Principles',
    props:['principles',
            'phrase',
            'num'],
    data () {
       return {

       }
    }
})
</script>
