<script>
export default {
    props: {
        floating: Boolean
    }
}
</script>

<template>
    <header :class="{
        'fixed top-0 left-1/2 -translate-x-1/2 max-w-screen-2xl w-full z-50': floating,
        'max-w-screen-2xl mx-auto w-full': !floating
    }">
        <div :class="{
            'flex justify-between items-center py-2 px-4 sm:px-6 text-white': floating,
            'flex justify-between items-center py-2 px-4 sm:px-6 text-black': !floating
        }">
            <RouterLink to="/about" class="text-base md:text-lg font-semibold uppercase">About</RouterLink>
            <RouterLink to="/" class="text-4xl md:text-5xl font-special">oa.</RouterLink>
            <RouterLink to="/projects" class="text-base md:text-lg font-semibold uppercase">Projects</RouterLink>
        </div>
    </header>
</template>