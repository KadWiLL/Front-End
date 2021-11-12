<template>
<div class="container">
  <Navbar />
  <Profiled />
  <router-view></router-view>
  <!-- 
  <Profiles />
  <Profile /> -->
</div>
</template>

<script>
 import Navbar from './components/Navbar.vue'
 
// import Profiles from './components/Profiles.vue'
import Profiled from './components/Profiled.vue'

export default {
  name: 'App',
  components: {
    Navbar,Profiled
    //Profiles, Profile
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  width: 100%;
}
</style>
