<script>
export default {
    props: {
        title: String,
        location: String,
        type: String,
        description: String,
        page: String
    }
}
</script>

<template>
    <a href="/" class="flex flex-col gap-1 p-2 md:p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
        <p class="font-special text-3xl md:text-4xl">{{ title }}</p>
        <div class="flex gap-2 items-center">
            <p class="text-lg md:text-xl uppercase">{{ location }},</p>
            <p class="text-lg md:text-xl">{{ type }}</p>
        </div>
        <p class="text-sm md:text-base text-gray-500 mb-4">{{ description }}</p>
        <p class="text-sm md:text-base text-gray-500">+more</p>
    </a>
</template>