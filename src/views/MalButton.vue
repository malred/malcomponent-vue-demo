<script setup>
import {MalButton} from "mal-vue-component";

const use = `
import {MalButton} from "mal-vue-component";
`
const code1 = `<MalButton type="danger">默认</MalButton>`
const code2 = `<MalButton type="success">默认</MalButton>`
const code3 = `<MalButton>默认</MalButton>`
const code4 = `<MalButton type="info">默认</MalButton>`
const code5 = `<MalButton type="warning">默认</MalButton>`
const code6 = `<MalButton type="primary">默认</MalButton>`
const codes1 = [code1, code2, code3, code4, code5, code6]

const code21 = `<MalButton plain type="danger">默认</MalButton>`
const code22 = `<MalButton plain type="success">默认</MalButton>`
const code23 = `<MalButton plain>默认</MalButton>`
const code24 = `<MalButton plain type="info">默认</MalButton>`
const code25 = `<MalButton plain type="warning">默认</MalButton>`
const code26 = `<MalButton plain type="primary">默认</MalButton>`
const codes2 = [code21, code22, code23, code24, code25, code26]


const code31 = `<MalButton round type="danger">危险圆形按钮</MalButton>`
const code32 = `<MalButton round type="success">成功圆形按钮</MalButton>`
const code33 = `<MalButton round>默认</MalButton>`
const code34 = `<MalButton round type="info">默认</MalButton>`
const code35 = `<MalButton round type="warning">默认</MalButton>`
const code36 = `<MalButton round type="primary">默认</MalButton>`
const codes3 = [code31, code32, code33, code34, code35, code36]

const code41 = `<MalButton type="success" lg>成功按钮</MalButton>`
const code42 = `<MalButton type="success" md>成功按钮</MalButton>`
const code43 = `<MalButton type="success">成功按钮</MalButton>`
const code44 = `<MalButton type="success" sm>成功按钮</MalButton>`
const codes4 = [code41, code42, code43, code44]
</script>

<template>
  <div class="main">
    <div class="title">导入</div>
    <div class="codes">
      <code>
        {{ use }}
      </code>
    </div>

    <br>
    <div class="title">不同类型的按钮</div>
    <MalButton class="btn" type="danger">默认</MalButton>
    <MalButton class="btn" type="success">默认</MalButton>
    <MalButton class="btn">默认</MalButton>
    <MalButton class="btn" type="info">默认</MalButton>
    <MalButton class="btn" type="warning">默认</MalButton>
    <MalButton class="last" type="primary">默认</MalButton>
    <div class="codes">
      <div class="" v-for="c in codes1" :key="c">
        <code>{{ c }}</code>
      </div>
    </div>
    <br>

    <div class="title">朴素按钮</div>
    <MalButton class="btn" plain type="danger">默认</MalButton>
    <MalButton class="btn" plain type="success">默认</MalButton>
    <MalButton class="btn" plain>默认</MalButton>
    <MalButton class="btn" plain type="info">默认</MalButton>
    <MalButton class="btn" plain type="warning">默认</MalButton>
    <MalButton class="last" plain type="primary">默认</MalButton>
    <div class="codes">
      <div class="" v-for="c in codes2" :key="c">
        <code>{{ c }}</code>
      </div>
    </div>
    <br>

    <div class="title">圆形按钮</div>
    <MalButton class="btn" round type="danger">危险圆形按钮</MalButton>
    <MalButton class="btn" round type="success">成功圆形按钮</MalButton>
    <MalButton class="btn" round>默认</MalButton>
    <MalButton class="btn" round type="info">默认</MalButton>
    <MalButton class="btn" round type="warning">默认</MalButton>
    <MalButton class="last" round type="primary">默认</MalButton>
    <div class="codes">
      <div class="" v-for="c in codes3" :key="c">
        <code>{{ c }}</code>
      </div>
    </div>
    <br>

    <div class="title">不同大小的按钮</div>
    <MalButton class="btn" type="success" lg>成功按钮</MalButton>
    <MalButton class="btn" type="success" md>成功按钮</MalButton>
    <MalButton class="btn" type="success">成功按钮</MalButton>
    <MalButton class="last" type="success" sm>成功按钮</MalButton>
    <div class="codes">
      <div class="" v-for="c in codes4" :key="c">
        <code>{{ c }}</code>
      </div>
    </div>
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
  margin: 40px;
  text-align: center;
}

.last {
  margin-bottom: 15px;
}

.btn {
  margin-right: 10px;
}

.codes {
  text-align: left;
  margin-left: 480px;
  width: 35%;
  padding: 10px;
  background: beige;
}
</style>