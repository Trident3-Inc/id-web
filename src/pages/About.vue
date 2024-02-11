<template>
  <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Story />
      <Team />
      <Recruitment />
      <Testimonials />
      <Cta />      

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/HeroAbout.vue'
import Story from '../partials/Story.vue'
import Team from '../partials/Team.vue'
import Recruitment from '../partials/Recruitment.vue'
import Testimonials from '../partials/Testimonials02.vue'
import Cta from '../partials/Cta02.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    Hero,
    Story,
    Team,
    Recruitment,
    Testimonials,
    Cta,
    Footer,
  },
}
</script>