import MyNavbar from './components/MyNavbar.vue'

<template>
  <div id="app">
    <router-view/>
    <!-- <MyNavbar></MyNavbar> -->
  </div>
</template>

<style lang="scss">
// 圓體字體
@import url(https://fonts.googleapis.com/earlyaccess/cwtexyen.css);

#app {
  font-family:'cwTeXYen', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
