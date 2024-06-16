<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    components: {
        Header, Footer
    },
    props: {
        floatingHeader: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <div>
        <Header :floating="floatingHeader" />
        <slot />
        <Footer v-if="!floatingHeader" />
    </div>
</template>