<script>
import Layout from '../components/Layout.vue';

export default {
    components: {
        Layout
    }
}
</script>

<template>
    <Layout>
        <div class="max-w-screen-2xl mx-auto mt-8 px-4 sm:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-8">
                <div class="flex flex-col gap-4">
                    <h1 class="font-special text-4xl md:text-5xl">NÚRIA VILCHEZ BOIX</h1>
                    <p>An independent Spatial and Graphic designer based in Barcelona, Spain. My name is Núria Vilchez, in my projects I give a lot of importance to color and the choice of materials. A good distribution of the space needs to be complemented with the right materials, the right light and chromatic range. The most important thing when I am designing space is to maintain a relationship between essence, aesthetics and functionality.</p>
                    <p>Despite being born in Barcelona, in November 2001, I have lived all my life in Santpedor. A small town in Central Catalonia surrounded by kilometers of fields. I have always been a very creative person and passionate about history, both art history and contemporary history. I found the design to be this perfect blend of history, creativity and functionality. I am graduated as a spatial designer at EINA Barcelona University.</p>
                    <p>I can say that everything that surrounds me has always served me as inspiration and a means of design processes. The curves of the extensive fields, Montserrat, the ancient architecture of my town, the irregular streets, the trades and the craftsmen, among others. I always try to collect as many resources as possible from the experiences I can live. Going to see showrooms, touching the materials, the shape of the products, visiting buildings, going to conferences and visiting cities I consider to be an essential part of developing as a designer. One of the experiences that helped me the most was the Erasmus stay at Politecnico di Milano (academic year 2021/2022).</p>
                    <p>Another factor that I consider essential as a designer is the fact of being multi-educated. Fortunately, at EINA you have the freedom to be the designer you really want to be, since my first year at university I have always been combining subjects between graphic design and space design, which allows me to easily solve problems and difficulties that other people, which have only been specified in a single branch of the design, they cannot do.</p>
                    <p>Apart from design, I love painting, making collages, photography, traveling and going to the mountains. Especially traveling, getting to know other points of view, other cultures and different branches of design has made me evolve into the designer I am today.</p>
                </div>
                <div class="flex flex-col gap-4">
                    <img src="/images/portfolio.jpg" alt="núria" class="self-center rounded w-full max-h-[450px] lg:max-h-[700px] max-w-[450px] lg:max-w-[700px] object-center object-cover">
                    <div class="flex flex-col items-center lg:items-start">
                        <p class="uppercase text-center">Contact info</p>
                        <div class="ml-4 text-center lg:text-left">
                            <p>mail: vilchezboix@gmail.com</p>
                            <p>phone: +34 695 56 49 83</p>
                            <p>linkedin: Núria Vilchez</p>
                            <p>instagram: @visualstudioa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </Layout>
</template>