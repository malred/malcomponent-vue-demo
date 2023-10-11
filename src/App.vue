<script setup>
import HomeView from "./views/HomeView.vue";
import {ref} from "vue";

let isActive = ref('')

const components = [
  {
    name: '介绍',
    to: '/'
  },
  {
    name: '按钮',
    to: '/btn'
  }
]
const liclick = (val) => {
  isActive.value=val
  // console.log(isActive.value)
}
</script>

<template>
  <HomeView/>
  <ul class="side-nav">
    <li><img src="/logo.png" alt=""></li>
    <li @click="liclick(c.name)" :class="{active:isActive===c.name}" v-for="c in components" :key="c">
      <router-link :to='c.to'>{{ c.name }}</router-link>
    </li>
  </ul>
  <router-view/>
</template>
<style scoped>
.active{
  background: skyblue ;
}

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
  background-color: rgba(46, 231, 214, 0.56);
  overflow-x: hidden;
  transition: 0.5s;
//padding-top: 20px;
}

.side-nav > li {
  text-align: center;
  margin-top: 20px;
  padding: 6px;
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
  margin: 14px;
}
</style>