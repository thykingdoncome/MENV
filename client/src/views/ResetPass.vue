<template>
  <section class="fgtPass">
    <div class="form">
      <form>
        <h1>
           <router-link to="/">
         J O A Z E
         </router-link> 
        </h1>

        <div class="inputs">
          <label>Please provide your Email Address</label>
          <input type="email" required autofocus />
        </div>

        <div class="accBtn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResetPass"
};
</script>

<style scoped>
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

.fgtPass {
  display: flex;
  align-items: center;
  height: 100vh;
}

.fgtPass h1 {
  text-align: center;
  margin: 0 0 1em;
  font-family: cursive;
}

.fgtPass a {
  color: #8b8686;
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

button {
  cursor: pointer;
  border-radius: 3px;
  color: white;
  background: #0077c5;
  outline: none;
  transition: 0.3s;
}

button:hover {
  background: rgb(16, 18, 19);
}
</style>
