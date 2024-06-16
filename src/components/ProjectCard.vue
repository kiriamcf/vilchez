<script>
export default {
    props: {
        source: String,
        name: String,
        location: String,
        type: String,
        page: String
    }
}
</script>

<template>
    <div class="flex flex-col gap-6">
        <img :src="source" :alt="name" loading="lazy" class="w-full h-[500px] object-center object-cover">
        <div class="flex flex-col gap-1">
            <p class="font-special text-3xl md:text-4xl">{{ name }}</p>
            <div class="flex gap-2 items-center">
                <p class="text-lg md:text-xl uppercase">{{ location }},</p>
                <p class="text-lg md:text-xl">{{ type }}</p>
            </div>
        </div>
    </div>
</template>