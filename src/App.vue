<template>
  <div id="app">
    <div class="header">
      i am header!
    </div>
    <div class="tab">
      i am tab!
    </div>
    <div class="content">
      i am content!
    </div>
  </div>
</template>

<script>
import Header from './components/header/header.vue';
export default {
  components: {
    Header
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

</style>
