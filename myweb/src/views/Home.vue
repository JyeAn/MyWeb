<template>
    <div class='home'>
      <!-- <Navbar></Navbar> -->
      <!-- <MyNavbar></MyNavbar> -->
      <Header></Header>
      <Banner></Banner>
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header, Banner, Footer
  }
};
</script>
