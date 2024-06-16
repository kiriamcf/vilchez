<script>
import Layout from '../components/Layout.vue';
import BlogCard from '../components/BlogCard.vue';

export default {
    components: {
        Layout, BlogCard
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
                <BlogCard 
                    title="my moodboard. day a day inspo" 
                    location="barcelona" 
                    type="ongoing" 
                    description='I have been studying and working in Barcelona for more than five years. I currently live there and I always like to take pictures of any element that i like or find inspiring. This is a section where I photograph my everyday life.' 
                    page="moodboard" />
                    
                <BlogCard 
                    title="salone del mobile fuorisalone" 
                    location="milano" 
                    type="2023's edition" 
                    description='In 2023 I did my Erasmus stay in Milan. There I discovered these wonderful events and the importance of being on top of the latest trends. This edition is the second one I went to, and it also coincided with the Euroluce festival.' 
                    page="salone_mobile" />

                <BlogCard 
                    title="la provence. local architecture" 
                    location="la provence" 
                    type="2023" 
                    description='This was a trip I took with my family in this wonderful French region. This is a photo collection of the route we took.' 
                    page="ee" />

                <BlogCard 
                    title="de cadaquès a Tossa" 
                    location="costa brava" 
                    type="2022-2023" 
                    description='Throughout these last two years I have been visiting the Costa Brava area. I come from the central area of Catalonia and it is not customary to summer in the northern area as it is. In this section I collect photographs of the moments when I had the opportunity to visit this wonderful area of my region.' 
                    page="ee" />

                <BlogCard 
                    title="Roma & other places" 
                    location="italy - greece" 
                    type="2022" 
                    description='During my Erasmus stay I was lucky and privileged to be able to travel through Italy and other areas such as Greece. These trips have served me as a way to have other references regarding architecture and urbanism.' 
                    page="ee" />

                <BlogCard 
                    title="salone del mobile fuorisalone" 
                    location="milano" 
                    type="2022's edition" 
                    description='This was my first edition visiting Milan Design Week, it coincided with my Erasmus stay at the Milan Polytechnic. In addition, some collegues from the university came to carry out a project in which I was able to help them in the visits to the exhibition sites.' 
                    page="ee" />
            </div>
        </div>
    </Layout>
</template>