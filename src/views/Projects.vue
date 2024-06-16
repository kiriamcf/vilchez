<script>
import Layout from '../components/Layout.vue';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: {
        Layout, ProjectCard
    }
}
</script>

<template>
    <Layout>
        <div class="max-w-screen-2xl mx-auto mt-8 px-4 sm:px-6">
        <div class="flex gap-8 mb-8">
            <RouterLink to="/projects" class="text-base md:text-lg" :class="{'underline': $route.name == 'Projects'}">projects</RouterLink>
            <RouterLink to="/blogs" class="text-base md:text-lg" :class="{'underline': $route.name == 'Blogs'}">blog</RouterLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-x-32">
            <ProjectCard 
                source="/images/projects/fluid.jpg" 
                name="fluïd" 
                location="santpedor" 
                type="social" 
                page="ee" />

            <ProjectCard 
                source="/images/projects/origens.jpg" 
                name="origens" 
                location="tossa de mar" 
                type="residential" 
                page="ee" />

            <ProjectCard 
                source="/images/projects/bar_la_mar.jpg" 
                name="bar la mar" 
                location="sitges" 
                type="restaurant" 
                page="ee" />

            <ProjectCard 
                source="/images/projects/atempo.jpg" 
                name="atempo" 
                location="santpedor" 
                type="land art" 
                page="ee" />

            <ProjectCard 
                source="/images/projects/bk_app.jpg" 
                name="bk-apartment" 
                location="paris" 
                type="residential" 
                page="ee" />

            <ProjectCard 
                source="/images/projects/khroma.jpg" 
                name="khroma" 
                location="marrakech" 
                type="hotel" 
                page="ee" />

            <ProjectCard 
                source="/images/projects/common_object.jpg" 
                name="oggetti communi" 
                location="milano" 
                type="exhibition design" 
                page="ee" />

            <ProjectCard 
                source="/images/projects/cecilia.jpg" 
                name="cecilia chair" 
                location="milano" 
                type="product design" 
                page="ee" />

            <ProjectCard 
                source="/images/projects/spyd.jpg" 
                name="spyd table" 
                location="santpedor" 
                type="product design" 
                page="ee" />
        </div>
    </div>
    </Layout>
</template>