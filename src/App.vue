<script setup>
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <HomeView/>
  <ul class="side-nav">
    <li><img src="/logo.png" alt=""></li>
    <li>
      <router-link to="/">介绍</router-link>
    </li>
    <li>
      <router-link to="/btn">按钮</router-link>
    </li>
  </ul>
  <router-view/>
</template>
<style scoped>
* {
  text-align: center;
}

.side-nav {
  position: fixed;
  height: 100%;
  width: 120px; /*原始宽度为0*/
  z-index: 1;
  top: 0;
  left: 0;
  color: white;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 20px
}

.side-nav > li {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

.side-nav > li:hover {
  background: skyblue;
  transition: 0.5s;
}

img {
  border-radius: 24px;
  width: 80px;
  margin: 20px;
}
</style>