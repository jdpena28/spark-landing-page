<template>
    <div class="bg-yellow-400 font-primary w-14 h-screen flex gap-20 py-10">
        <h1 class="mx-auto">Culture <b><i>Manual</i></b></h1>
        <nav> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height=auto width=32px><g id="Layer_31" data-name="Layer 31"><path d="M52,17.84H12a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,52,17.84Z"/><path d="M47,30.5H17a1.5,1.5,0,0,0,0,3H47A1.5,1.5,0,0,0,47,30.5Z"/><path d="M42,43.16H22a1.5,1.5,0,0,0,0,3H42A1.5,1.5,0,0,0,42,43.16Z"/></g></svg></nav>
        <p class="mx-auto font-light text-sm">guide - <B class="font-bold">leadearship experience</B></p>
    </div>
</template>

<style scoped>
div {
    writing-mode: vertical-lr;
    text-orientation:mixed;
}
nav {
    transform: rotate(-90deg)
}
div > h1,p {
    transform: rotate(180deg)
}

</style>

<script lang="ts">

export default ({
    name: 'Sidebar',
    prop: [],
    component: {},
    data () { 
        return {

        }   
    },
})
</script>
