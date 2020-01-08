<template>
  <section id="welcome">
    <div class="success">
      <div v-if="user">
        <h1>Hello user with details:</h1>

        <div>
          <ul>
            <li>
              <h2>Name: {{ user.name }}</h2>
            </li>
            <li>
              <h2>Email: {{ user.email }}</h2>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3>WELCOME TO J O A Z E</h3>
      </div>
      <div class="para">
        <p>
          You are on this page because you successfully registered and signed in
          to Joaze
        </p>

        <p>
          This was created to test a simple database using MENV stack
        </p>
      </div>

      <div class="accBtn">
        <button id="btn" @click.prevent="logoutMeth">Logout</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Welcome",

  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["logout", "welcomeProfile"]),
    logoutMeth() {
      this.logout();
    }
  },

  created() {
    this.welcomeProfile();
  }
};
</script>

<style scoped>
#welcome {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
}

li {
  list-style: none;
  margin: 0.5em 0 0 0;
}

.success {
  margin: 0 auto;
  /* text-align: center; */
}

.success h3 {
  margin: 1em 0;
}

.success p {
  font-size: 1.3em;
  line-height: 30px;
}

.success .accBtn {
  width: 40%;
  /* margin: 0 auto; */
}

.para {
  margin-bottom: 2em;
}
</style>
