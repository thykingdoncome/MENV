<template>
  <div class="land">
    <div class="contain">
      <h1>Welcome!! we are pleased you are here 🤗</h1>
    <h2>This landing page is under construction</h2>
    <br />
    <h3>To continue, please click the links below to Register or Login</h3>

    <br />
    <div id="link">
      <span class="accBtn">
        <router-link to="/register">
          <button id="btn">Create Account</button>
        </router-link>
      </span>

      <span class="accBtn">
        <router-link to="/login">
          <button id="btn">Login</button>
        </router-link>
      </span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
};
</script>

<style scoped>
.land {
  width: 85%;
  margin: 10% auto;
  background: rgb(247, 247, 6);
  text-align: center;
  padding: 1em;
}

#link {
  display: flex;
  margin: 1em auto;
  width: 80%;
}

#btn{
  width: 50%;
}

#link span {
  margin: 0 1em;
}
</style>
