<template>
  <section>
    <div class="navbar">
      <div class="links">
        <p>Already have an Joaze account?</p>
      </div>

      <div class="navBtn">
        <router-link to="/login">
          <button id="btn"><i class="fas fa-lock"></i> Login</button>
        </router-link>
      </div>
    </div>

    <header class="mainHead">
      <h1>
        <router-link to="/">
          J O A Z E
        </router-link>
      </h1>
    </header>

    <section>
      <div class="form">
        <form @submit.prevent="registerMeth">
          <div class="createAcc">
            <h2>
              Create a Joaze account
            </h2>
          </div>

          <Errors v-if="error" :msg="error" />

          <div>
            <div class="inputs">
              <label for="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autofocus
                v-model="name"
              />
            </div>

            <div class="inputs">
              <label for="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                v-model="email"
              />
            </div>

            <div class="inputs">
              <label for="password">Password</label>
              <input
                name="password"
                id="password"
                type="password"
                required
                v-model="password"
              />
            </div>
          </div>

          <div class="accBtn">
            <input id="btn" type="submit" value="Create Account" />
          </div>

          <div class="privacy">
            <p>
              <em>
                By clicking Create account, you agree to our <br />
                <a href="#">Terms</a> and have read and acknowledge our
                <a href="#"> Privacy Statement</a>.
              </em>
            </p>
          </div>
        </form>
      </div>
    </section>

    <div class="privacy">
      <p>Legal Privacy Security</p>
      <p>© 2019 Joaze, Inc. All rights reserved.</p>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Errors from "../components/Errors";

export default {
  name: "Register",

  components: {
    Errors
  },

  computed: {
    ...mapGetters(["error"])
  },

  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },

  methods: {
    ...mapActions(["register"]),
    registerMeth() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.register(user)
        .then(res => {
          if (res.data.success) {
            console.log(res.data);
            this.$router.push("/login");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>

.createAcc {
  margin: 1em 0;
  text-align: center;
}

</style>
