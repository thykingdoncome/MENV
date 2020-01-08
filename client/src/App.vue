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

.navbar {
    width: 100%;
    justify-content: flex-end;
    text-align: right;
    display: flex;
    align-items: center;
}

.navBtn button {
  padding: 10px 20px 10px 20px;
  margin: 0px 2em;
  border: 1px solid #4c4c4c;
}

.navBtn {
  margin-top: 0.4em;
}

.links {
  font-size: 0.7em;
  line-height: 15px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.mainHead {
  width: 100%;
  margin: 3em auto 1em;
  text-align: center;
  font-family: cursive;
}

.mainHead a {
  color: #8b8686;
}

#btn {
    cursor: pointer;
    border-radius: 3px;
    color: white;
    background: #0077C5;
    outline: none;
    transition: .5s;
    font-weight: bold;
}

#btn:hover {
    background: rgb(16, 18, 19);
}

a {
    text-decoration: none;
    color: #0077C5;
}

.form {
    background: rgba(153, 150, 150, 0.226);
    max-width: 400px;
    margin: 0 auto;
    padding: 1em 1.5em;
    border-radius: 4px;
    box-shadow: 2px 3px 3px 2px rgb(0, 0, 0, 0.6);
    font-weight: 700;
}

.inputs {
  margin-bottom: 2em;
  max-width: 100%;
}

input {
  width: 100%;
  margin: 0.5em 0;
  padding: 1em 5px;
  outline: 0;
  font-size: 1em;
  border-radius: 3px;
  border: none;
  background: #f3f4f5;
}

.accBtn {
  width: 100%;
}

.accBtn button {
  width: 100%;
  padding: 1.2em 0;
  box-shadow: 1px 1px 2px black;
  border: none;
}

.privacy {
  text-align: center;
  margin: 3em 0;
}

</style>
