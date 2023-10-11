<script setup>
import {MalButton} from "vue-vite-component";
</script>

<template>
  <div class="main">
    <nav>
      Button
    </nav>

    <div class="title">不同类型的按钮</div>
    <MalButton class="btn" type="danger">默认</MalButton>
    <MalButton class="btn" type="success">默认</MalButton>
    <MalButton class="btn">默认</MalButton>
    <MalButton class="btn" type="info">默认</MalButton>
    <MalButton class="btn" type="warning">默认</MalButton>
    <MalButton class="last" type="primary">默认</MalButton>
    <br>

    <div class="title">朴素按钮</div>
    <MalButton class="btn" plain type="danger">默认</MalButton>
    <MalButton class="btn" plain type="success">默认</MalButton>
    <MalButton class="btn" plain>默认</MalButton>
    <MalButton class="btn" plain type="info">默认</MalButton>
    <MalButton class="btn" plain type="warning">默认</MalButton>
    <MalButton class="last" plain type="primary">默认</MalButton>
    <br>

    <div class="title">圆形按钮</div>
    <MalButton class="btn" round type="danger">危险圆形按钮</MalButton>
    <MalButton class="btn" round type="success">成功圆形按钮</MalButton>
    <MalButton class="btn" round>默认</MalButton>
    <MalButton class="btn" round type="info">默认</MalButton>
    <MalButton class="btn" round type="warning">默认</MalButton>
    <MalButton class="last" round type="primary">默认</MalButton>
    <br>

    <div class="title">不同大小的按钮</div>
    <MalButton class="btn" type="success" lg>成功按钮</MalButton>
    <MalButton class="btn" type="success" md>成功按钮</MalButton>
    <MalButton class="btn" type="success">成功按钮</MalButton>
    <MalButton class="last" type="success" sm>成功按钮</MalButton>
    <br>
  </div>
</template>

<style scoped>
nav {
  font-weight: 700;
  font-size: 24px;
  margin: 70px;
}

.title {
  margin-bottom: 10px;
  font-weight: 600;
}

.main {
  //margin-top: 80px;
  text-align: center;
}

.last {
  margin-bottom: 15px;
}

.btn {
  margin-right: 10px;
}
</style>