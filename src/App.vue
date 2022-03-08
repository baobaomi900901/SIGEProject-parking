<template>
  <div id="app" class="h-full bg-gray-600">
    <menu class="text-white p-4">
      <!-- active-class="active" 点击时样式 -->
      <router-link active-class="active" to="/Park01">Park01</router-link>
      <router-link active-class="active" to="/Park02">Park02</router-link>
      <router-link active-class="active" to="/Park03">Park03</router-link>
      <router-link active-class="active" to="/Park04">Park04</router-link>
      <router-link active-class="active" to="/Park05">Park05</router-link>
      <router-link active-class="active" to="/Park06">Park06</router-link>
      <router-link active-class="active" to="/Park07">Park07</router-link>
      <!-- <router-link active-class="active" to="/Parkdemo">Parkdemo</router-link> -->
      <!-- <router-link active-class="active" to="/Demo">Demo</router-link> -->
    </menu>
    <div class="view">
      <!-- 路由视窗 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Park01 from "./components/Park01.vue";

export default {
  name: "App",
  components: {
    // Park01,
  },
  mounted() {
    // 750/1
    let view = document.querySelector(".view");
    let scale = window.screen.width / 750;
    view.style.transform = `scale(${scale})`;
  },
};
</script>

<style>
#app {
}

.view {
  width: 750px;
  transform-origin: 0 0 0;
  /* transform: scale(1.2); */
  /* transform-origin: center; */
}

.active {
  display: inline-block;
  color: #fff;
  background: blue;
}

menu a {
  padding: 10px 16px;
  color: #000;
}

menu a + a {
  margin-left: 10px;
}
</style>