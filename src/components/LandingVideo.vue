<script>
import ArrowDown from './icons/ArrowDown.vue';

export default {
    props: {
        source: String,
        name: String,
        type: String,
        page: String,
        last: Boolean
    },
    components: { ArrowDown }
}
</script>

<template>
    <div class="snap-center relative">
        <video class="w-screen h-screen object-cover object-center" autoplay loop muted>
            <source :src="source" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-black/10 z-0"></div>
        <div class="absolute bottom-4 md:bottom-12 left-4 md:left-12 text-white flex flex-col">
            <h1 class="text-4xl md:text-5xl uppercase font-special">{{ name }}</h1>
            <h3 class="text-lg md:text-xl font-medium">{{ type }}</h3>
        </div>
        <div class="absolute bottom-4 md:bottom-12 right-4 md:right-12 text-white">
            <p class="text-lg md:text-xl font-medium hidden sm:block">see the entire project</p>
        </div>
        <div v-if="!last" class="absolute bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block">
            <ArrowDown />
        </div>
    </div>
</template>