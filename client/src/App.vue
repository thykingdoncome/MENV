<template>
  <div id="app">
    <!-- <Errors v-if="error" :msg="error" /> -->
    <router-view/>
  </div>
</template>

<script>

</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #eceef1;
  color: #8b8686;
  max-height: 100vh;
}

button {
    cursor: pointer;
    border-radius: 3px;
    color: white;
    background: #0077C5;
    outline: none;
    transition: .5s;
}

button:hover {
    background: rgb(16, 18, 19);
}

</style>
