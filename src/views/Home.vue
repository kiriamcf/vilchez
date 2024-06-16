<script>
import Layout from '../components/Layout.vue';
import LandingVideo from '../components/LandingVideo.vue';

export default {
    components: {
        Layout, LandingVideo
    }
}
</script>

<template>
    <Layout :floatingHeader="true">
        <div class="h-screen snap-y snap-mandatory overflow-scroll">
            <LandingVideo source="/videos/fluid.mp4" name="Fluid" type="social design" page="lol" :last="false" />
            <LandingVideo source="/videos/origens.mp4" name="Orígens" type="residential design" page="lol" :last="false" />
            <LandingVideo source="/videos/barlamar.mp4" name="Bar la mar" type="restaurant design" page="lol" :last="true" />
        </div>
    </Layout>
</template>